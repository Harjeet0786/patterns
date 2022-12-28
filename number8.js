/*
   
                          1
                        2 3 4
                      5 6 7 8 9
                    10 11 12 13 14 
                 15 16 17 18 19 20 21
  */
let n = 5; // you can take input from prompt or change the value
let string = "";
count = 1;
// External loop
for (let i = 1; i <= n; i++) {
    // printing characters
    for (let j = 1; j <= n - i; j++) {

        string += " ";

    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        string += count;
        count++;
    }
    string += "\n";
}
console.log(string);
