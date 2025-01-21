const marklogic = require('marklogic');
const connection = require('../settings/settings');

const db = marklogic.createDatabaseClient(connection);
const vb = marklogic.valuesBuilder;

const listAllCompanies = (req, res) => {
  db.values.read(
    vb.fromIndexes('companyName')
  ).result()
  .then((response) => {
    const companies = response['values-response'].tuple.map(company => company['distinct-value'].toString());
    res.json(companies);
  })
  .catch(error => console.error(error));
};

const getCompanyInfo = (req, res) => {
  const uri = `/factsheet/${req.params.customerName}.json`;
  db.documents.read(uri).result()
  .then(response => res.json(response[0].content.factsheet))
  .catch(error => console.error(error));
};

module.exports = {
  getCompanyInfo,
  listAllCompanies
};
