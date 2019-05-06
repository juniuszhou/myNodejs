let async = require('async');
let await = require('await');

// define a async function.
async function f() {
    return 1;
}

// call async via await and the same time
// await must be in async.
async function call_f() {
    let result = await f();
    console.log(result);
}

f().then(console.log);

call_f().finally();


console.log(await (f()));
