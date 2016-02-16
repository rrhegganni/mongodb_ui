var React = require('react');

var DummyComponent = React.createClass({
    render: function() {
    console.log("Dummy"+this.props.userName);
        return (
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">HackCrunch DB Manager</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Document</a></li>
                    <li className="dropdown">
                     <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{this.props.userName}<span className="caret"></span></a>
                     <ul className="dropdown-menu" role="menu">
                       <li><a href="#">Profile</a></li>
                       <li><a href="#">Logout</a></li>
                     </ul>
                   </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )
    }
});

module.exports = DummyComponent;
