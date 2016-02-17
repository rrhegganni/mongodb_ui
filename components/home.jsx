var React = require('react');

var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');
var superagent = require('superagent');

var Home = React.createClass({

    render: function() {
      console.log(this.props.data);
      var i = 1;
      var divVal = <div className='col-xs-12'><div className='jumbotron'><p>You don't have any deployments yet -- let's get started:</p></div></div>;
      var cols = this.props.data.map(function(app){
        var appUri = "mongodb://node1.mongodb." + app.user_id+ "." + app.app_name + ".hackit.hackcrunch.com:8080,node2.mongodb." + app.user_id + "." + app.app_name + ".hackit.hackcrunch.com:8080,node3.mongodb." + app.user_id + "." + app.app_name + ".hackit.hackcrunch.com:8080/?replicaSet=" + app.user_id + "_" + app.app_name + "_hackitMongoReplica";
        return (
            <tr>
              <td>{i++}</td>
              <td><a href={appUri}>{app.app_name.toUpperCase()}</a></td>
              <td>{app.cluster_type.toUpperCase()}</td>
              <td>{app.instance_size.toUpperCase()}</td>
            </tr>
        )
      })
      var divTab = <div><h3>You have the following Applications running</h3><table className='table table-striped table-hover'> <thead><tr><th>#</th><th>APPLICATION NAME</th><th>CLUSTER TYPE</th><th>INSTANCE TYPE</th></tr></thead><tbody>{cols}</tbody></table></div>;
      return (
          <div className="row">
            <Menu />
            <LeftNav colorChanger="home"/>
            {this.props.data.length == 0 ? divVal : divTab}
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
                <a href="/mongorecovery" className="btn btn-success btn-sm">Manage Existing</a>
              </div>
            </div>
          </div>
        )
    }
});

module.exports = Home;
