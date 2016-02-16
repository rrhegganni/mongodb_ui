var React = require('react');

var LeftNav = React.createClass({
    render: function() {
      console.log(this.props.stateVar);
      return (
        <div className="col-xs-6 col-md-4 col-lg-3">
          <div className="list-group">
            <ul className="nav nav-pills nav-stacked">
              <li className="btn-success"><a href="#">Home</a></li>
              <li><a href="#">Backup</a></li>
              <li><a href="#">Recovery</a></li>
            </ul>
          </div>
        </div>
        )
    }
});

module.exports = LeftNav;
