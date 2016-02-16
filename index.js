var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var session = require('express-session');
var Iso = require('iso');
var iso = new Iso();

require('node-jsx-babel').install();
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

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

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://localhost', host, port);
});
