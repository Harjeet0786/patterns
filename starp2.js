/*

*****
****
***
**
*


*/

let n = 5; // you can take input from prompt or change the value
let string = "";

// External loop
for (let i = 0; i <= n; i++) {
    // printing star
    for (let j = 1; j < n - i + 1; j++) {
        string += "*"

    }
    string += "\n";
}
console.log(string);