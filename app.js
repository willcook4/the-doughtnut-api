const jsonServer = require('json-server');
const clone = require('clone');
const data = require('./doughnuts.json');

let port = process.env.PORT || 3000;

let app = jsonServer.create();
let router = jsonServer.router(clone(data));

app.all('*', (req, res, next) => {
    router.db.object = clone(data);
    next();
});

app.use(jsonServer.defaults);
app.use(router);

app.listen(port, () => {
    console.log(`Listening on ${port} for calls for Doughnuts`);
});