const marklogic = require('marklogic');
const connection = require('../settings/settings');

const db = marklogic.createDatabaseClient(connection);

const supportCalls = (req, res) => {
  const customer = req.params.customerName;
  db.invoke({
    path: '/ext/supportCallsSearch.sjs',
    variables: {
      customer,
      from: null,
      to: null,
      term: null
    }
  }).result()
  .then((response) => {
    const values = response.map(r => r.value);
    res.json(values);
  })
  .catch(error => console.error(error));
};

const supportCallsSearch = (req, res) => {
  const customer = req.params.customerName;
  const postRequest = req.body;

  if (postRequest.from && postRequest.to) {
    db.invoke({
      path: '/ext/supportCallsSearch.sjs',
      variables: {
        customer,
        from: postRequest.from,
        to: postRequest.to
      }
    }).result()
    .then((response) => {
      const values = response.map(r => r.value);
      res.json(values);
    })
    .catch(error => console.error(error));
  } else {
    const term = req.body.term;
    const customerSelector = req.body.customer;

    if (customerSelector === 'this') {
      db.invoke({
        path: '/ext/supportCallsSearch.sjs',
        variables: {
          customer,
          from: null,
          to: null,
          term
        }
      }).result()
      .then((response) => {
        const values = response.map(r => r.value);
        res.json(values);
      })
      .catch(error => console.error(error));
    } else {
      db.invoke({
        path: '/ext/supportCallsSearch.sjs',
        variables: {
          customer: null,
          from: null,
          to: null,
          term
        }
      }).result()
      .then((response) => {
        const values = response.map(r => r.value);
        res.json(values);
      })
      .catch(error => console.error(error));
    }
  }
};

module.exports = {
  supportCalls,
  supportCallsSearch
};
