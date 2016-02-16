var React = require('react');

var LeftNav = React.createClass({
    render: function() {
      console.log(this.props.stateVar);
      return (
        <div>
          <div className="list-group">
            <ul className="leftnav">
              <li><a href="/home"  className="btn btn-success btn-lg">Home</a></li>
              <li><a href="/mongobackup"  className="btn btn-default btn-lg">BackUp</a></li>
              <li><a href="/mongorecovery"  className="btn btn-default btn-lg">Recovery</a></li>
            </ul>
          </div>
        </div>
        )
    }
});

module.exports = LeftNav;
