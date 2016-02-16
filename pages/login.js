var React = require('react');
var ReactDOM = require('react-dom');
var DynamicComponent = require('../components/login.jsx');
ReactDOM.render(React.createElement(DynamicComponent,{}), document.getElementById('mount'));
