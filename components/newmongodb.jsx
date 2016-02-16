var React = require('react');

var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');

var NewMongoDB = React.createClass({
  getInitialState: function() {
       return {
       app_name:"",
       cluster_type:"replica"
     };
   },
   setAppName:function(event){
     this.setState({app_name:event.target.value});
   },

   setClusterType:function(event){
    this.setState({cluster_type:event.target.value});
   },

   handleSubmit: function(){


       var payload = {"instance_size" : "small",
        "cluster_type" : this.state.cluster_type,
        "app_name" : this.state.app_name,
        "user_id" : "rakesh"
        }
        console.log(payload);
   },
    render: function() {
        return (
          <div>
            <Menu />
            <LeftNav />
            <div className="col-sm-12 col-md-6">
            <form className="form-horizontal">
              <fieldset>
                <legend >New MongoDB Deployment</legend>
                <div className="form-group">
                  <label for="text" className="col-lg-4 control-label">Application Name</label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" id="inputApp" onChange={this.setAppName} placeholder="Name of the Application" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputPassword" className="col-lg-4 control-label">Cluster Type</label>
                  <div className="btn-group col-lg-8">
                    <select className="dropdownnew" value={this.state.cluster_type} onChange={this.setClusterType}>
                      <option value="replica">Replica</option>
                      <option value="sharded">Sharded</option>
                      <option value="node">Node</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-lg-10 col-lg-offset-4">
                    <button type="reset" className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>
              </fieldset>
            </form>
            </div>
          </div>
        )
    }
});

module.exports = NewMongoDB;
