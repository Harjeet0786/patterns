/*


1
12
123
1234
12345
1234
123
12
1

 
*/

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing number
    for (let j = 1; j < i; j++) {
        string += j;
    }
    string += "\n";

}
for (let i = 1; i <= n - 1; i++) {
    // printing number
    for (let j = 1; j < n - i; j++) {
        string += j;

    }
    string += "\n";
}

console.log(string);

