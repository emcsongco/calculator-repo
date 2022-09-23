// THESE ARE THE HTML ELEMENTS I WANT / NEED
// GOOD - RESULT LINE
const showResult = document.getElementById("output-display");
console.log (showResult);
// GOOD - A/C BUTTON
const clearButton = document.getElementById("clear");
console.log (clearButton);
// GOOD = EQUAL BUTTON
const calcButton = document.getElementById("calc");
console.log(calcButton);
// GOOD ALL BUTTONS - ELEMENTS
const inputButtons = document.getElementsByClassName("input");
console.log(inputButtons);
// GOOD ALL BUTTONS - NODE LIST
const buttonItems = document.querySelectorAll(".input");
console.log(buttonItems);

// -------------------------------------------------------------------
// 
// GOOD - BYPASS PAGE REFRESH ON CLICK / ENTER
buttonItems.forEach(buttonItem => {
    buttonItem.addEventListener("click", (event) => {
    event.preventDefault();

    outputText = buttonItem.textContent;

    const entryItem = document.getElementsByClassName("input");
    entryItem[0].innerHTML = outputText;
     })
});

// const entryItem = document.getElementsByClassName("input");
// entryItem[0].innerHTML = outputText;

const num1 = Number(prompt("First number: "));
const operator = prompt("Operator: ");
const num2 = Number(prompt("Second number: "));

let equation = `${num1} ${operator} ${num2}`;
let result;

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
}

// alert (`${equation} = `);
// alert (calculateTwoNumbers(num1,operator,num2));

console.log (`${equation} =`)
console.log (calculateTwoNumbers(num1,operator,num2));
