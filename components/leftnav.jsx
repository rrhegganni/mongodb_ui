var React = require('react');

var LeftNav = React.createClass({
    render: function() {
      return (
        <div>
          <div className="list-group">
            <ul className="leftnav">
              <li><a href="/home"  className="btn btn-success btn-lg">Home</a></li>
              <li><a href="/mongobackup"  className="btn btn-primary btn-lg">BackUp</a></li>
              <li><a href="/mongorecovery"  className="btn btn-primary btn-lg">Recovery</a></li>
            </ul>
          </div>
        </div>
        )
    }
});

module.exports = LeftNav;
