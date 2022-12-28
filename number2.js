/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5 

*/

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);