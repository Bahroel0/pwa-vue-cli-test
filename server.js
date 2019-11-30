var express = require("express");
// var path = require("path");
var serveStatic = require("serve-static");

const app = express();

app.use(serveStatic(__dirname + "/dist"));
var port = 80;
app.listen(port);
