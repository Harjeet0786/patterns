/*
    A
   ABC
  ABCDE
 ABCDEFG
ABCDEFGHI


*/
let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 0; j < n - i; j++) {

        string += " ";

    }
    for (let k = 0; k < 2 * i - 1; k++) {
        string += String.fromCharCode(k + 65);

    }
    string += "\n";
}
console.log(string);
