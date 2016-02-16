var crontab = require('crontab');

var backup = (function() {
  var instance = {},
    setResponseHeader = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
  //Retrieves asset from JCR
  instance.createCronTab = function() {
    console.log(crontab);
    crontab.load(function(err, crontab) {
  if (err) {
    return console.error(err);
  }

  var command = 'ls -l';

  crontab.remove({command:command});
  crontab.create(command, '@reboot');
  crontab.save(function(err, crontab) {
   });
  });


  };
  return instance;
})();

module.exports = backup;
