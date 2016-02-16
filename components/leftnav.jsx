var React = require('react');

var LeftNav = React.createClass({
    render: function() {
      console.log(this.props.stateVar);
      return (
        <div>
          <div className="list-group">
            <ul className="leftnav">
              <li><a href="#"  className="btn btn-default btn-lg try">Home</a></li>
              <li><a href="#"  className="btn btn-default btn-lg">BackUp</a></li>
              <li><a href="#"  className="btn btn-default btn-lg">Recovery</a></li>
            </ul>
          </div>
        </div>
        )
    }
});

module.exports = LeftNav;
