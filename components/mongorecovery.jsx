var React = require('react');
var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');
var MongoRecovery = React.createClass({
    render: function() {
        return (
          <div className="row">
            <Menu />
            <LeftNav colorChanger="recovery"/>
            <img className="col-md-6 col-lg-offset-3" src="/assets/images/WorkinProgress.jpg" />
          </div>
        )
    }
});

module.exports = MongoRecovery;
