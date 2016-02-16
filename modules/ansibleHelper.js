var Ansible = require('node-ansible');
var ansibleHelper = (function() {
  var instance = {},
    setResponseHeader = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    instance.checkPlaybook = function(body){
      console.log("inside check playbook");
	    console.log(body);
      var command = new Ansible.Playbook().playbook('/home/ec2-user/hackrunch/infra_code/profiles/hackit').inventory('/home/ec2-user/hackrunch/infra_code/vars/appVars/mongodb/hosts')
                                    .variables({baseApp:"mongodb",application:body.app_name,user:body.user_id}).verbose('vvvv');
			command.on('stdout', function(data) { console.log(data.toString()); });
			command.on('stderr', function(data) { console.log(data.toString()); });
      var promise = command.exec();
      promise.then(function(successResult) {
          console.log(successResult.code); // Exit code of the executed command
          console.log(successResult.output) // Standard output/error of the executed command
        }, function(error) {
          console.error(error);
      })
    };
	
	
	instance.backupPlaybook = function(body){
      console.log("inside check playbook");
	    console.log(body);
      var command = new Ansible.Playbook().playbook('/home/ec2-user/hackrunch/infra_code/profiles/backup').inventory('/home/ec2-user/hackrunch/infra_code/vars/appVars/mongodb/hackit_mongodb_hosts')
                                    .variables({baseApp:"mongodb"}).verbose('vvvv');
			command.on('stdout', function(data) { console.log(data.toString()); });
			command.on('stderr', function(data) { console.log(data.toString()); });
      var promise = command.exec();
      promise.then(function(successResult) {
          console.log(successResult.code); // Exit code of the executed command
          console.log(successResult.output) // Standard output/error of the executed command
        }, function(error) {
          console.error(error);
      })
    };
  return instance;
})();

module.exports = ansibleHelper;
