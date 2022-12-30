/*
        1
      1 2 3
    1 2 3 4 5 
  1 2 3 4 5 6 7 

 
 ABCDEFG
ABCDEFGHI


*/
let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing number
  for (let j = 1; j <= n - i; j++) {

    string += " ";

  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += k

  }
  string += "\n";
}
console.log(string);
