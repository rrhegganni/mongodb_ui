var React = require('react');

var Login = require('./login.jsx');
var LeftNav = require('./leftnav.jsx')

var Home = React.createClass({
    render: function() {
        return (
          <div>
            <LeftNav />
            <Login />
          </div>
        )
    }
});

module.exports = Home;
