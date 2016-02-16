var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');


require('node-jsx-babel').install();
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

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

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://localhost', host, port);
});
