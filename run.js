/**
 * Created by junius on 2/2/16.
 */

var app = require('./app');

var server = app.listen(7777, function() {
    console.log('get request from ' + server.address.address + ' ' + server.address.port)
});