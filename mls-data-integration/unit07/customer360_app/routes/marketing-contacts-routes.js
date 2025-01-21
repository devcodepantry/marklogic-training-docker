const marklogic = require('marklogic');
const connection = require('../settings/settings');

const db = marklogic.createDatabaseClient(connection);

const marketingContacts = (req, res) => {
  const customer = req.params.customerName;
  db.invoke({
    path: '/ext/marketingContacts.sjs',
    variables: { customer }
  }).result()
  .then((response) => {
    const values = response.map(r => r.value);
    res.json(values);
  })
  .catch(error => console.error(error));
};

module.exports = {
  marketingContacts
};
