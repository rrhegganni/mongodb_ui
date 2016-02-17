var React = require('react');

var LeftNav = React.createClass({

    render: function() {
      var colorChanger = this.props.colorChanger;
      var home = "warning";
      var backup = "primary";
      var recovery = "primary";
      if(colorChanger == "home"){
        home = "btn btn-lg btn-warning";
        backup = "btn btn-lg btn-primary";
        recovery = "btn btn-lg btn-primary";
      }else if(colorChanger == "backup"){
        home = "btn btn-lg btn-primary";
        backup = "btn btn-lg btn-warning";
        recovery = "btn btn-lg btn-primary";
      }else if(colorChanger == "recovery"){
        home = "btn btn-lg btn-primary";
        backup = "btn btn-lg btn-primary";
        recovery = "btn btn-lg btn-warning";
      }
      return (
        <div>
          <div className="list-group">
            <ul className="leftnav">
              <li><a href="/home"  className={home}>Home</a></li>
              <li><a href="/mongobackup"  className={backup}>BackUp</a></li>
              <li><a href="/mongorecovery"  className={recovery}>Recovery</a></li>
            </ul>
          </div>
        </div>
        )
    }
});

module.exports = LeftNav;
