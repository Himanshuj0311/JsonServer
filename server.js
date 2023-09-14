const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port =  3001; 

//https://tiny-puce-jaguar-hem.cyclic.app/users


server.use(middlewares);
server.use(router);

server.listen(port);