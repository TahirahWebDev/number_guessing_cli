#!/usr/bin/env node
import inquirer from 'inquirer';
const randomNo = Math.floor(Math.random() * 10 + 1);
const ans = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10"
    }
]);
const guessedNumber = parseInt(ans.guessedNumber);
if (guessedNumber === randomNo) {
    console.log("Congratulations! You guessed the right number");
}
else {
    console.log("Sorry! You guessed the wrong number");
}
console.log("The correct number is " + randomNo);
