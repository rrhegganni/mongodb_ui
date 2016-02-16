var React = require('react');
var Router=require('react-router');
var app = express();




var Login = React.createClass({

  userNameEmpty:false,
  passwordEmpty:false,

 mixins : [Router.Navigation],

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
        app.use(express.session({userName: this.state.userName}));
        location.href='/home';
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
          <form className="form-horizontal pull-right loginFormWidth" onSubmit={this.handleSubmit}>
           <fieldset>
              <legend className="legendText"> Enter your credentials </legend>
              <div className="form-group">
                <label for="userName" className="col-lg-2 control-label labelFieldSize">User Name</label>
                  <div class="col-lg-10">
                    <input type="text" className="form-control fieldSize" id="userName" onChange={this.setUserName} placeholder="Enter your user name"/>
                    {this.userNameEmpty==true?<div> User Name is empty </div>:""}
                  </div>
              </div>

              <div className="form-group">
                <label for="inputPassword" className="col-lg-2 control-label labelFieldSize">Password</label>
                  <div class="col-lg-10">
                    <input type="password" className="form-control fieldSize" id="inputPassword" onChange={this.setPassword} placeholder="Password" />
                    {this.passwordEmpty==true?<div> Password empty </div>:""}
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
        )
    }
});

module.exports = Login;
