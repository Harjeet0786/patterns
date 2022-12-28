/*
1 2 3 4 5
1 2 3 4 
1 2 3 
1 2 
1*/

let n = 5; // you can take input from prompt or change the value
let string = "";

// External loop
for (let i = 0; i <= n; i++) {
    // printing characters
    for (let j = 1; j < n - i + 1; j++) {
        string += j

    }
    string += "\n";
}
console.log(string);