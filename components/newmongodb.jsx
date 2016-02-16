var React = require('react');

var LeftNav = require('./leftnav.jsx');
var Menu = require('./menu.jsx');

var NewMongoDB = React.createClass({
    render: function() {
        return (
          <div>
            <Menu />
            <LeftNav stateVar="active" />
            <div className="col-sm-12 col-md-6">
            <form className="form-horizontal">
              <fieldset>
                <legend >New MongoDB Deployment</legend>
                <div className="form-group">
                  <label for="text" className="col-lg-4 control-label">Application Name</label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" id="inputEmail" placeholder="Name of the Application" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputPassword" className="col-lg-4 control-label">Cluster Type</label>
                  <div className="btn-group col-lg-8">
                    <a href="#" className="btn btn-default">REPLICA</a>
                    <a href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#" className="btn btn-default">NODE</a></li>
                      <li><a href="#" className="btn btn-default">SHARDED</a></li>
                    </ul>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-lg-10 col-lg-offset-4">
                    <button type="reset" className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-success">Submit</button>
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
