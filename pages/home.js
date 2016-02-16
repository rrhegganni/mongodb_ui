var React = require('react');
var ReactDOM = require('react-dom');
var iso = require('iso');

iso.bootstrap(function(meta){
  console.log("=====");
  console.log("meta meta "+meta);
  var DynamicComponent = require('../components/home.jsx');
  ReactDOM.render(React.createElement(DynamicComponent,{}), document.getElementById('mount'));
});
