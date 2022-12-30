/*

5 4 3 2 1 
4 3 2 1 
3 2 1 
3 2
1
*/
let n = 5; // you can take input from prompt or change the value
let string = "";

// External loop
for (let i = 0; i <= n; i++) {
    // printing number
    for (let j = 0; j <= n - i + 1; j++) {
        string += n - i - j + 2

    }
    string += "\n";
}
console.log(string);
