// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 

const johnWeight = 78;
const johnHeight = 1.69;

const markWeight = 95;
const markHeight = 1.88;

const johnBMI = (johnWeight / (johnHeight ** 2));
const markBMI = ((markWeight / (markHeight * markHeight)));

const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI.toFixed(2)} is higher than John's ${johnBMI, toFixed(2)}`);

}
else {
    console.log(`John's BMI ${johnBMI.toFixed(2)} is higher than Mark's ${markBMI.toFixed(2)}`);

}