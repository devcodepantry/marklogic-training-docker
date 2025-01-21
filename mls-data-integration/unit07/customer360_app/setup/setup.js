const fs        = require('fs');
const Promise      = require('bluebird');
const request      = Promise.promisify(require('request'));
const marklogic = require('marklogic');
const settings  = require('../settings/settings');

const db        = marklogic.createDatabaseClient(settings);

const indexConfig  = JSON.parse(fs.readFileSync(`${__dirname}/index.json`), 'utf8');

const requestAsync = (
  endpoint,
  method,
  json,
  host = settings.host,
  port = settings.restPort,
  user = settings.user,
  password = settings.password
) => {
  const baseURL = `http://${host}:${port}`;
  return request({
    url: baseURL + endpoint,
    method,
    auth: {
      user,
      password,
      sendImmediately: false
    },
    headers: {
      'Content-type': 'application/json'
    },
    json
  });
};

const createModule = function createModule(moduleName) {
  return db.config.extlibs.write({
    path: moduleName,
    contentType: 'application/vnd.marklogic-javascript',
    source: fs.createReadStream(`${__dirname}/sjs/${moduleName}`)
  }).result();
};


requestAsync('/manage/v2/databases/customer360/properties', 'PUT', indexConfig)
.then((response) => {
  if (response.statusCode === 204) {
    console.info(`${response.statusCode} - Indexes created`);
  } else {
    console.info(`Response status: ${response.statusMessage}`);
  }
})
.then(() => {
  const files = fs.readdirSync(`${__dirname}/sjs/`);
  files.map(file =>
    createModule(file).then(info => console.info(`Inserted ${info.path}`)).error(error => console.error(error)));
})
.catch(error => console.error(error));
