// My Declared Variables

console.log ("Initialize...");

let num1;
let num2;
let operator;
let equation = `Perform a basic calculation between 2 numbers, num1 ${num1} and num2 ${num2} using ${operator} (+, -, x, /)`;

let result;
let numEntry = "";
let outputText;

// let dotPos;
// let position;
// let dotCt = 0;

// Grabbed elements from HTML

console.log ("Grab elements...");

const inputText = document.getElementById("input-display");
const resultText = document.getElementById("output-display");
const inputButtons = document.getElementsByClassName("input")[0];
const buttonItems = document.querySelectorAll(".input");
// const AC = document.getElementById("clear");
// const calculate = document.getElementById("calc");

console.log(inputText);
console.log (resultText);
console.log (inputButtons);
console.log (buttonItems);

// Functions
// BASIC CALCULATOR FUNCTIONS: ADD, SUBTRACT, MULTIPLY, DIVIDE

// SAVE RESULT OF CALCULATING TWO NUMBERS
const addTwoNumbers = (num1,num2) => num1 + num2;
const subtractTwoNumbers = (num1,num2) => num1 - num2;
const multiplyTwoNumbers = (num1,num2) => num1 * num2;
const divideTwoNumbers  = (num1,num2) => num1 / num2;

const calculateTwoNumbers = (num1, operator, num2) => {
    switch (operator) {
        case "+":
            result = addTwoNumbers (num1, num2);
            break;
        case "-":
            result = subtractTwoNumbers (num1, num2);
            break;
        case "*":
            result = multiplyTwoNumbers (num1, num2);
            break;
        case "/":
            result = divideTwoNumbers (num1, num2);
            break;
        default:
            break;
    }
    return (result);
    resultText.innerHTML=result;
};

// PERFORM BASIC CALCULATOR MOUSE CLICKS 
buttonItems.forEach(buttonItem => {
    buttonItem.addEventListener("click", (event) => {
    event.preventDefault();

// TAKE VALUE OF MOUSE CLICKS, SHOW APPENDED NUMBERS ON TOP DISPLAY AREA
    const outputText = buttonItem.textContent;
    console.log(outputText);
    switch(outputText) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            numEntry = numEntry + outputText;
            resultText.innerHTML=numEntry;
            break;
        case ".":
            // if (dotCt === 0) {
            //     numEntry = numEntry + outputText;
            //     resultText.innerHTML = numberStr;
            //     dotCt ++;
            // }
            break;

        case "AC": // CLEAR DISPLAY AREA
            numEntry = "";
            resultText.innerHTML=numEntry;
        case "+":
        case "-": 
        case "*": 
        case "/":     
            num1 = Number(numEntry);
            num2 = Number(numEntry);
            operator = outputText;
            numEntry = numEntry + outputText;
            inputText.innerHTML = numEntry;
            resultText.innerHTML = calculateTwoNumbers (num1, operator, num2);
            console.log(num1);
            console.log(operator);
            console.log(numEntry);
            break;
        case "=":
            num2 = Number(numEntry);
            numEntry = numEntry + outputText;
            resultText.innerHTML = calculateTwoNumbers(num1, operator, num2); 
            equation = `${num1} ${operator} ${num2} =`
            console.log (num2);
            console.log (operator);
            console.log (outputText);
            console.log (equation);
            console.log (numEntry);
            console.log (resultText);
            break;
        case "+/-":
        case "%":
            break;
        default: 
            break;
    }

// My checks
console.log (resultText);
// console.log (AC);
// console.log(calculate);
console.log(inputButtons);
console.log(buttonItems);
// console.log (`${equation} =`)
// console.log (calculateTwoNumbers(num1,operator,num2));

});


// -----------------------------------------------------------
// const num1 = Number(prompt("First number: "));
// const operator = prompt("Operator: ");
// const num2 = Number(prompt("Second number: "));
// const num1 = 100;
// const operator = "/";
// const num2 = 5;
});
