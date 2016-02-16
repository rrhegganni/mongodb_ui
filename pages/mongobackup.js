var React = require('react');
var ReactDOM = require('react-dom');
var DynamicComponent = require('../components/mongobackup.jsx');
var superagent = require('superagent');
superagent
  .get('/db/rakesh')
  .end(function(err, res){
    ReactDOM.render(React.createElement(DynamicComponent,{data:res.body.dbs}), document.getElementById('mount'));
  });
