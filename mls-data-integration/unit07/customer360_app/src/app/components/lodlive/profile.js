'use strict';
var MarkLogicProfile = {};
MarkLogicProfile.connection = {
 'http:' : {
    endpoint : '/v1/graphs/sparql',
    description : {
      en : 'MarkLogic LodLive'
    }
  }
};

MarkLogicProfile.defualt = {
  sparql: {
    allClasses : 'SELECT DISTINCT ?object WHERE {[] a ?object}',
    documentUri : 'SELECT DISTINCT * WHERE {<{URI}> ?property ?object} ORDER BY ?property',
    document : 'SELECT DISTINCT * WHERE {<{URI}> ?property ?object}',
    inverse : 'SELECT DISTINCT * WHERE {?object ?property <{URI}>.} LIMIT 100',
    inverseSameAs : 'SELECT DISTINCT * WHERE {{?object <http://www.w3.org/2002/07/owl#sameAs> <{URI}> } UNION { ?object <http://www.w3.org/2004/02/skos/core#exactMatch> <{URI}>}}'
  },
  endpoint : '/v1/graphs/sparql',
  document : {
    className : 'standard',
    titleProperties : [
        'http://xmlns.com/foaf/0.1/name'
    ]
  }
};

MarkLogicProfile.arrows = {
  'http://www.w3.org/2002/07/owl#sameAs'   : 'isSameAs',
  'http://purl.org/dc/terms/isPartOf'      : 'isPartOf',
  'http://purl.org/dc/elements/1.1/type'   : 'isType',
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' : 'isType'
};

MarkLogicProfile.default = {
  document : {
    className : 'standard',
    titleProperties : [
        'http://xmlns.com/foaf/0.1/name'
    ]
  }
};

MarkLogicProfile.UI = {
  ignoreBnodes: true,
  nodeIcons: [
    { builtin: 'tools' },
    { builtin: 'docInfo' },
    { builtin: 'remove' },
  ],
  tools: [
    { builtin: 'rootNode'},
    { builtin: 'expand' },
    { builtin: 'remove' }
  ],
  nodeHover: function() {},
  relationships: {
    'http://procycling.com/ontology/boardMember': {
      color: '#0f0'
    },
    'http://procycling.com/ontology/investor': {
      color: '#00f'
    },
    'http://procycling.com/ontology/spouseOf' : {
        color:'#f00'
    },
    'http://procycling.com/ontology/knows' : {
        color:'#eee'
    },
    'http://procycling.com/ontology/acquiredBy' : {
        color:'#B9121B'
    },
    'http://procycling.com/ontology/hasStoreIn' : {
        color:'#588F27'
    }
  }
};

MarkLogicProfile.endpoints = {
  all : '',
  jsonp: false
};

module.exports = MarkLogicProfile;