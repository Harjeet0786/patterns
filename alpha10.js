/*

    A
   ABC
  ABCDE
 ABCDEFG
ABCDEFGHI
 ABCDEFG
  ABCDE
   ABC
    A

*/

let n = 5; // you can take input from prompt or change the value
let string = "";

// // External loop
for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 1; j < n - i + 1; j++) {

        string += " ";

    }
    for (let k = 0; k < 2 * i - 1; k++) {
        string += String.fromCharCode(k + 65);

    }
    string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
    // printing characters
    for (let j = 1; j < i + 1; j++) {
        string += " ";

    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        string += String.fromCharCode(k + 65);

    }
    string += "\n";
}

console.log(string);


