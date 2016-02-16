var React = require('react');
var superagent = require('superagent');
var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');

var MongoBackup = React.createClass({
    getInitialState: function() {
         return {
         app_name:""
       };
     },
     setAppName:function(event){
         this.setState({app_name:event.target.value});
     },
     handleSubmit: function(){

          superagent
            .post('/db/backup')
            .send({baseApp:this.state.app_name})
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

module.exports = MongoBackup;
