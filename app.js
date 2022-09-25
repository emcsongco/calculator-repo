// My Declared Variables

console.log ("Initialize...");

let num1;
let num2;
let operator;
let num1Str = "";
let num2Str = "";
let result;
let numEntry = "";
let outputText;
let dotCt = 0;

// Grabbed elements from HTML

console.log ("Grab elements...");

const inputText = document.getElementById("input-display");
const resultText = document.getElementById("output-display");
const inputButtons = document.getElementsByClassName("input")[0];
const buttonItems = document.querySelectorAll(".input");
// const AC = document.getElementById("clear");
// const calculate = document.getElementById("calc");

// console.log(inputText);
// console.log (resultText);

// Functions
// BASIC CALCULATOR FUNCTIONS: ADD, SUBTRACT, MULTIPLY, DIVIDE

// SAVE RESULT OF CALCULATING TWO NUMBERS
const addTwoNumbers = (num1,num2) => num1 + num2;
const subtractTwoNumbers = (num1,num2) => num1 - num2;
const multiplyTwoNumbers = (num1,num2) => num1 * num2;
const divideTwoNumbers  = (num1,num2) => num1 / num2;
const percentTwoNumbers = (num1,num2) => num1 * (num2/100);

const calculateTwoNumbers = (num1, operator, num2) => {
    console.log (`Perform a basic calculation between 2 numbers, num1 ${num1} and num2 ${num2} using ${operator} (+, -, x, /)`);
    num1 = Number(num1Str);
    num2 = Number(num2Str);
    operator;

    console.log(`Input 1 is ${num1}`);
    console.log(`Input 2 is ${num2}`);
    console.log(`Operator is ${operator}`);

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
        case "%":
            result = percentTwoNumbers (num1, num2);
            break;
        default:
            break;
    }
    return (result);
    console.log (result);
};

// PERFORM BASIC CALCULATOR MOUSE CLICKS 
buttonItems.forEach(buttonItem => {
    buttonItem.addEventListener("click", (event) => {
    event.preventDefault();

// TAKE VALUE OF MOUSE CLICKS, SHOW APPENDED NUMBERS ON TOP DISPLAY AREA
    const outputText = buttonItem.textContent;
    // console.log(outputText);
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
            numEntry = numEntry + outputText;
            resultText.innerHTML=numEntry;
            console.log(resultText.innerHTML);
            break;
        case ".":
            if (dotCt === 0) {
                numEntry = numEntry + outputText;
                resultText.innerHTML = numEntry;
                dotCt ++;
            } 
            break;

        case "AC": // CLEAR DISPLAY AREA
            numEntry = "";
            resultText.innerHTML = numEntry;
            inputText.innerHTML = numEntry;
        case "+":
        case "-": 
        case "*": 
        case "/":
            operator = outputText;
            if (num1Str === "") {
                num1Str = operator + numEntry;
                num1 = Number(num1Str);
            } else {
                num2Str = operator + numEntry;
                num2 = Number(num2Str);
                outputText.innerHTML = num2Str;
            }
            numEntry = numEntry + outputText;
            inputText.innerHTML = numEntry;
            numEntry = "";
            operator = outputText;
            break;
        case "=":
            num2 = Number(numEntry);
            numEntry = numEntry + outputText;
            equation = `${num1} ${operator} ${num2}`;
            console.log(`num1= ${num1}`);
            console.log(`operator = ${operator}`);
            console.log(`num2 = ${num2}`);
            console.log(`num2Str = ${num2Str}`);
            console.log (`equation = ${equation}`);
            resultText.innerHTML = calculateTwoNumbers(`${num1}, ${operator}, ${num2}`); 
            console.log(resultText.innerHTML);
            break;
        case "+/-":
        case "%":
            break;
        default: 
            break;
    }
    

});

// -----------------------------------------------------------
// const num1 = Number(prompt("First number: "));
// const operator = prompt("Operator: ");
// const num2 = Number(prompt("Second number: "));
// const num1 = 100;
// const operator = "/";
// const num2 = 5;
});
