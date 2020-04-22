var letters = [];
var word = "hello world";
var rword = "";

for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
console.log(word);
console.log(letters);
console.log(letters.length);
let len = letters.length;
for (var i = 0; i < len; i++) {
    console.log(i, letters);
    rword += letters.pop();
}

console.log(rword);

