var React = require('react');
var ReactDOM = require('react-dom');
var iso = require('iso');
var DynamicComponent = require('../components/home.jsx');
var superagent = require('superagent');
superagent
  .get('/db/NGP')
  .end(function(err, res){
    ReactDOM.render(React.createElement(DynamicComponent,{data:res.body.dbs}), document.getElementById('mount'));
});
