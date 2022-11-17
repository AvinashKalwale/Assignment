const readline = require("readline");

const ut = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


ut.question("Please enter your name: ", (ans) => {
    console.log(ans);
    ut.close()
})