var React = require('react');

var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');

var Home = React.createClass({

    render: function() {
      console.log("server Side Rendering "+this.props.userName);
        return (
          <div className="row">
            <Menu userName={this.props.userName}/>
            <LeftNav />
            <div className="col-xs-12">
              <div className="jumbotron">
                <p>You don't have any deployments yet -- let's get started:</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <div className="jumbotron">
                <h3>Build New Deployment</h3>
                <p>I want to build and fully manage a new MongoDB deployment.</p>
                <a href="/newmongodb" className="btn btn-success btn-sm">Build New</a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <div className="jumbotron">
                <h3>Manage Existing Deployment</h3>
                <p>I have a MongoDB deployment already and I want to use Cloud Manager to manage it.</p>
                <a href="#" className="btn btn-success btn-sm">Manage Existing</a>
              </div>
            </div>
          </div>
        )
    }
});

module.exports = Home;
