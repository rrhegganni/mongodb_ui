var express = require('express');
var React = require('react');
var bodyParser = require('body-parser');
var ReactDOMServer = require('react-dom/server');


var backup = require('./modules/backup');
var ansibleHelper = require('./modules/ansibleHelper');

var users = [];

var session = require('express-session');
var Iso = require('iso');
var iso = new Iso();

require('node-jsx-babel').install();
var app = express();

app.use(bodyParser.json({
  limit: '100mb'
}));
// app.use(bodyParser.urlencoded({
//   limit: '100mb',
//   extended: true
// }));

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))



var setResponseHeader = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

app.post('/db/deploy', function(httpRequest, httpResponse) {
  console.log('SEARCH executing for asset: %s ', httpRequest.url);

  var body = httpRequest.body ;
  console.log(body);
  ansibleHelper.checkPlaybook(body);
  users.push(body);
  httpResponse.writeHead(200, setResponseHeader);
  var resp = { a : "a" , b : "b" , c: body}
  httpResponse.end(JSON.stringify(resp));
  // httpResponse.sendStatus(200);
});

app.get('/db/:userid', function(httpRequest, httpResponse) {
  var user = httpRequest.params.userid;
  console.log('GET executing for asset: %s ', httpRequest.url);
  // controller.processReadAsset(httpRequest, httpResponse);

  httpResponse.writeHead(200, setResponseHeader);
  var dbs = [] ;
  for (i = 0; i < users.length; i++) {
  if(users[i].user_id == user){
    dbs.push(users[i]);
  }
   }
  var resp = {user:user,dbs:users};
  httpResponse.end(JSON.stringify(resp));

});

app.post('/db/backup', function(httpRequest, httpResponse) {
  console.log('POST executing for asset: %s ', httpRequest.url);
  ansibleHelper.backupPlaybook(httpRequest.body);
  httpResponse.writeHead(200, setResponseHeader);
  var resp = { status: "success"}
  httpResponse.end(JSON.stringify(resp));
});


app.get('/_status', function(httpRequest, httpResponse) {
  httpResponse.sendStatus(200);
});





app.get('/', function (req, res) {
  var component = require('./components/login.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{}));
  res.render('login',
    {
      'markup': markup
   });
});

app.get('/home', function (req, res) {
  var component = require('./components/home.jsx');
  req.session['userId']=req.query.userId;

  iso.add('', {moundPoint: req.query.userId});
  var markup = ReactDOMServer.renderToString(React.createElement(component,{'userName':req.session['userId']}));
  res.render('home',
    {
      'markup': markup,
      'moundPoint': iso.render()
    }
  );
});

app.get('/newmongodb', function (req, res) {
  console.log("New Mongo DB"+req.session.userId);
  var component = require('./components/newmongodb.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{}));
  res.render('newmongodb',
    {
      'markup': markup
   });
});

app.get('/mongobackup', function (req, res) {
  var component = require('./components/mongobackup.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{data:[]}));
  res.render('mongobackup',
    {
      'markup': markup
   });
});

app.get('/mongorecovery', function (req, res) {
  var component = require('./components/mongorecovery.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{}));
  res.render('mongorecovery',
    {
      'markup': markup
   });
});

app.get('/*', function (req, res) {
  var component = require('./components/error.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{}));
  res.render('error',
    {
      'markup': markup
   });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://localhost', host, port);
});
