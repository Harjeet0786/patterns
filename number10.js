/*

    1
   123
  12345
 1234567
123456789
 1234567
  12345
   123
    1

*/

let n = 5; // you can take input from prompt or change the value
let string = "";

// // External loop
for (let i = 1; i <= n; i++) {
    // printing number
    for (let j = 1; j <= n - i + 1; j++) {

        string += " ";

    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        string += k

    }
    string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
    // printing number
    for (let j = 1; j <= i + 1; j++) {
        string += " ";

    }
    for (let k = 1; k <= 2 * (n - i) - 1; k++) {
        string += k

    }
    string += "\n";
}

console.log(string);


