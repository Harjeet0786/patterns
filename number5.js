/*
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5
*/

let n = 5; // you can take input from prompt or change the value
let string = "";

// External loop
for (let i = 0; i <= n; i++) {
    // printing characters
    for (let j = 1; j < n - i + 1; j++) {
        string += n - j + 1;

    }
    string += "\n";
}
console.log(string);