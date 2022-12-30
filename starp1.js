/*
*
** 
***
****
*****

*/

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing number
    for (let j = 1; j <= i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);