var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser'),
    bearerToken = require('express-bearer-token'),
    nodemailer = require('nodemailer'),
    appConfig = require('./appConfig.js'),
    transporter = nodemailer.createTransport(appConfig.mailConfig),
    mysql = require('mysql'),
    connection = mysql.createConnection(appConfig.dbConnect);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(bearerToken());


var routes = require('./routes/skeletonApiRoutes');
routes(app);

app.listen(port);
console.log('skeleton RESTful API server started on: ' + port);