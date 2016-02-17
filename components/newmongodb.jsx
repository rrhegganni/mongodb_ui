var React = require('react');
var superagent = require('superagent');

var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');

var NewMongoDB = React.createClass({
  getInitialState: function() {
       return {
       app_name:"",
       cluster_type:"replica",
       timer: false
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
        "user_id" : "NGP"
        }
        this.setState({timer:true});
        var scope = this;
        setTimeout(function(){
          scope.setState({timer:false});
          location.href = '/home';
         }, 60000);
        superagent
          .post('/db/deploy')
          .send(payload)
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .end(function(err, res){
            if (err || !res.ok) {
              console.log(err);
            } else {
              console.log(res.body);
            }
          });
   },
    render: function() {
        return (
          <div>
            <Menu />
            <LeftNav colorChanger="home"/>
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
                    <button type="reset" className="btn btn-success">Cancel</button>
                    <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>

              </fieldset>
            </form>
            </div>
            {this.state.timer == true ? <div className="col-sm-12 col-md-4 col-lg-offset-1"><img src="http://i.stack.imgur.com/MnyxU.gif" alt="HTML5 Icon" /></div> : <div></div>}


          </div>
        )
    }
});

module.exports = NewMongoDB;
