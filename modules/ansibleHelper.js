var Ansible = require('node-ansible');
var ansibleHelper = (function() {
  var instance = {},
    setResponseHeader = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    instance.checkPlaybook = function(body){
      console.log("inside check playbook
	  	    console.log(body);
		
      var command = new Ansible.Playbook().playbook('/home/ec2-user/hackrunch/infra_code/profiles/hackit').inventory('/home/ec2-user/hackrunch/infra_code/vars/appVars/mongodb/hosts')
                                    .variables({baseApp:"mongodb",application:body.app_name,user:body.user_id}).verbose('vvvv');
			command.on('stdout', function(data) { console.log(data.toString()); });
			command.on('stderr', function(data) { console.log(data.toString()); });
      var promise = command.exec();
      promise.then(function(successResult) {
          console.log(successResult.code); // Exit code of the executed command
          console.log(successResult.output) // Standard output/error of the executed command
		  httpResponse.writeHead(200, setResponseHeader);
			var resp = { a : "a" , b : "b" , c: body}
			httpResponse.end(JSON.stringify(resp));
        }, function(error) {
          console.error(error);
      })
    };
	
	
	instance.backupPlaybook = function(body){
      console.log("inside check playbook");
	  
	    console.log(body);		
		var base_dir='/home/ec2-user/users/';
		var file_dir='/hosts';
		var hosts = base_dir.concat(body.user_id,file_dir);
      var command = new Ansible.Playbook().playbook('/home/ec2-user/hackrunch/infra_code/profiles/backup').inventory(hosts)
                                    .variables({baseApp:"mongodb"}).verbose('vvvv');
			command.on('stdout', function(data) { console.log(data.toString()); });
			command.on('stderr', function(data) { console.log(data.toString()); });
      var promise = command.exec();
      promise.then(function(successResult) {
          console.log(successResult.code); // Exit code of the executed command
          console.log(successResult.output) // Standard output/error of the executed command
		  httpResponse.writeHead(200, setResponseHeader);
			var resp = { status: "success"}
			httpResponse.end(JSON.stringify(resp));
        }, function(error) {
          console.error(error);
      })
    };
  return instance;
})();

module.exports = ansibleHelper;
