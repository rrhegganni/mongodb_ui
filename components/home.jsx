var React = require('react');

var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');

var Home = React.createClass({
    render: function() {
        return (
          <div className="row">
            <Menu />
            <LeftNav stateVar="active" />
          </div>
        )
    }
});

module.exports = Home;
