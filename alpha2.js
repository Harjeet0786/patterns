/*
A
B B
C C C
D D D D
E E E E E*/

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 0; j < i; j++) {
        string += String.fromCharCode(i + 65);
    }
    string += "\n";
}
console.log(string);