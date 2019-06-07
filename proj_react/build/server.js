const express = require('express')
const proxy = require('http-proxy-middleware')
var routes = require('../routes/index');
var users = require('../routes/users');

/*const options = {
    target: "http://localhost:8080",
    changeOrigin:true,
}

const apiProxy = proxy(options)*/

const app = express()



app.use(express.static(__dirname))
//app.use('/', apiProxy)

// app.use('/', routes);
// app.use('/users', users);

app.listen(80)

