var mongoose = require('mongoose');


var a = 0

for(i=0;i<1000000;i++){
setTimeout(function f() {
    a = a + 1
    console.log("timeout triggered ");
    console.log(a)
}, 100)
}

console.log(a);

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
//db.on('error', console.log('connect failed'))
console.log(a);
