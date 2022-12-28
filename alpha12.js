/*


A
AB
ABC
ABCD
ABCDE
ABCD
ABC
AB
A

 
*/

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 0; j < i; j++) {
        string += String.fromCharCode(j + 65);
    }
    string += "\n";

}
for (let i = 1; i <= n - 1; i++) {
    // printing characters
    for (let j = 0; j < n - i; j++) {
        string += String.fromCharCode(j + 65);

    }
    string += "\n";
}

console.log(string);

