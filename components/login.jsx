var React = require('react');
var Router=require('react-router');
var Menu=require('./menu.jsx');

var Login = React.createClass({

  userNameEmpty:false,
  passwordEmpty:false,


 getInitialState: function() {
    //we are only saving the contributor as an example
    //of how to save data changes for final submission
    return {
      userName:"",
      password:"",
      error:""
    };
  },

  handleSubmit: function(e) {
      e.preventDefault();
      var isError=false;
      if(this.state.userName==''){
        this.setState({error:'error'});
        this['userNameEmpty']=true;
        isError=true;
      }

      if(this.state.password==''){
      this.setState({error:'error'});
        isError=true;
        this['passwordEmpty']=true;
      }
      if(isError==false){
        location.href='/home?userId='+this.state.userName;
      }
  },


  setUserName:function(event){
    this.setState({userName:event.target.value});
  },

  setPassword:function(event){
    this.setState({password:event.target.value});
  },

    render: function() {
    console.log('form load');
        return (
          <div className="row">
            <div id="right">
              <form className="form-horizontal  loginFormWidth" onSubmit={this.handleSubmit}>
               <fieldset>
                  <legend className="legendText"><h2 className="login-title"><img src="/assets/images/Tesco_Logo.svg.png" className="logoimg" /> Unified Cloud Management </h2></legend>
                  <div className="form-group">

                    <label for="userName" className="col-lg-2 control-label labelFieldSize login-title">User Name</label>
                      <div>
                        <input type="text" className="form-control fieldSize" id="userName" onChange={this.setUserName} placeholder="Enter your user name"/>
                        {this.userNameEmpty==true?<div className="errorDivAlign"> User Name is empty </div>:""}
                      </div>

                  </div>

                  <div className="form-group">
                    <label for="inputPassword" className="col-lg-2 control-label labelFieldSize login-title">Password</label>
                      <div>
                        <input type="password" className="form-control fieldSize" id="inputPassword" onChange={this.setPassword} placeholder="Password" />
                        {this.passwordEmpty==true?<div className="errorDivAlign"> Password empty </div>:""}
                      </div>
                  </div>

                  <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2 submitDivAlign">
                      <button type="submit" className="btn btn-primary submitButtonWidth">Login</button>
                    </div>
                  </div>
                  </fieldset>
                </form>
              </div>
          </div>
        )
    }
});

module.exports = Login;
