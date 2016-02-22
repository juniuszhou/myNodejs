// print all parameters 
for (i = 0; i < process.argv.length; i++) {
	console.log(process.argv[i]);
}

var environ = process.env;

console.log(environ["PATH"]);
