var jsonServer = require('json-server');
var clone = require('clone');
var data = require('./doughnuts.json');

var port = process.env.PORT || 3000;

var  app = jsonServer.create();
var router = jsonServer.router(clone(data));

app.all('*', (req, res, next) => {
  router.db.object = clone(data);
  next();
});

app.use(jsonServer.defaults);
app.use(router);

app.listen(port, function() {
  console.log('Listening on ' + port + ' for calls for Doughnuts');
});