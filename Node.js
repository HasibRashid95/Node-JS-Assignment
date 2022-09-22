const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let sum = 0;
let getNumber = () => {
    readline.question('Enter a number or you can type stop :', (answer) => {
        if (answer == 'stop') {
            console.log("Sum = " + sum);
            readline.close();
            return;
        }
        sum += parseFloat(answer);
        getNumber();
    });
};
getNumber();