const path = require('path');
const request = require('request');
const connection = require('../settings/settings');

const index = (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'dist', 'index.html'));

const sparql = ((req, res) => {
  request(`http://${connection.host}:${connection.port}/v1/graphs/sparql?query=${req.query.query}`, {
    auth: {
      user: connection.user,
      pass: connection.password,
      sendImmediately: false
    }
  }, (error, response, body) => res.end(body));
});

module.exports = {
  index,
  sparql
};
