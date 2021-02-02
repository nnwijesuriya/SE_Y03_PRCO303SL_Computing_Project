const http = require("http");
const app = require ("../HRIS/backend/app")
const debug = require("debug");


app.set('port', 3000)
const server = http.createServer(app);

server.listen(3000);