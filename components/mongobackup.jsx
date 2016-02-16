var React = require('react');
var superagent = require('superagent');
var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');

var MongoBackup = React.createClass({
    getInitialState: function() {
         return {
         app_name:"",
         timer: false,
         success: false
       };
     },
     componentWillMount:function(){
       var app = "";
       var data = this.props.data;
       if(data.length > 0){
         app = data[0].app_name;
       }
        this.setState({app_name: app});
     },
     setAppName:function(event){
         this.setState({app_name:event.target.value});
     },
     handleSubmit: function(){

         this.setState({timer:true});
         var scope = this;
         setTimeout(function(){
           scope.setState({timer:false , success:true});
          }, 60000);
          console.log("app::"+this.state.app_name);
          superagent
            .post('/db/backup')
            .send({baseApp:"mongodb", user_id:"NGP", app_name: this.state.app_name})
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
        <div className="row">
          <Menu />
          <LeftNav />
          <div className="col-sm-12 col-md-6">
          <form className="form-horizontal">
            <fieldset>
              <legend >Backup Your Application</legend>
              <div className="form-group">
                <label for="inputPassword" className="col-lg-4 control-label">Application Name</label>
                <div className="btn-group col-lg-8">
                  <select className="dropdownnew" value={this.state.app_name} onChange={this.setAppName}>
                    {this.props.data.map(function(db){
                      return <option value={db.app_name} >{db.app_name}</option>
                    })}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="col-lg-10 col-lg-offset-4">
                  <button type="reset" className="btn btn-default">Cancel</button>
                  <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
          </div>
          {this.state.timer == true ? <div className="col-sm-12 col-md-4 col-lg-offset-1"><img src="http://i.stack.imgur.com/MnyxU.gif" alt="HTML5 Icon" /></div> : <div></div>}
          {this.state.success == true ? <div className="col-sm-12 col-md-6"><div className="jumbotron"><p>Your application is backed up @ https://s3-us-west-2.amazonaws.com/hackit-mongodb-backup/latest/</p></div></div> : <div></div>}
        </div>
        )
    }
});

module.exports = MongoBackup;
