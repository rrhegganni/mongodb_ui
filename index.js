var express = require('express');
var React = require('react');
var bodyParser = require('body-parser');
var ReactDOMServer = require('react-dom/server');

var backup = require('./modules/backup');
var ansibleHelper = require('./modules/ansibleHelper');

var users = [];


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
  backup.createCronTab();
  httpResponse.sendStatus(200);
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

app.get('/home/:slug', function (req, res) {
  var component = require('./components/home.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{}));

  res.render('home',
    {
      'markup': markup
   });
});

app.get('/newmongodb', function (req, res) {
  var component = require('./components/newmongodb.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{}));
  res.render('newmongodb',
    {
      'markup': markup
   });
});

app.get('/mongobackup', function (req, res) {
  var component = require('./components/mongobackup.jsx');
  var markup = ReactDOMServer.renderToString(React.createElement(component,{}));
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
