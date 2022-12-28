/*
    A
   BCD
  EFGHI
 JKLMNOP
QRSTUVWXY */
let n = 5; // you can take input from prompt or change the value
let string = "";
count = 0;
// External loop
for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 0; j < n - i; j++) {

        string += " ";

    }
    for (let k = 0; k < 2 * i - 1; k++) {
        string += String.fromCharCode(k + 65);
        count++;
    }
    string += "\n";
}
console.log(string);
