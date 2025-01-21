const marklogic  = require('marklogic');
const connection = require('../settings/settings');

const db = marklogic.createDatabaseClient(connection);

const recentPurchases = (req, res) => {
  const customer = req.params.customerName;
  db.invoke({
    path: '/ext/recentPurchases.sjs',
    variables: { customer }
  }).result()
  .then((response) => {
    const values = response.map(r => r.value);
    res.json(values);
  })
  .catch(error => console.error(error));
};

const recentPurchasesSearch = (req, res) => {
  const customer = req.params.customerName;
  const dateObject = req.body;
  db.invoke({
    path: '/ext/recentPurchasesSearch.sjs',
    variables: {
      customer,
      from: dateObject.from,
      to: dateObject.to
    }
  }).result()
  .then((response) => {
    const values = response.map(r => r.value);
    res.json(values);
  })
  .catch(error => console.error(error));
};

module.exports = {
  recentPurchases,
  recentPurchasesSearch
};
