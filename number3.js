/*
1
2 3 
4 5 6
7 8 9 10 
11 12 13 14   */

let n = 5; // you can take input from prompt or change the value
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
    // printing number
    for (let j = 1; j < i; j++) {
        string += count
        count++;
    }
    string += "\n";
}
console.log(string);