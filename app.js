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
const buttonItems = document.querySelectorAll(".input");
const AC = document.getElementById("clear");
// const calculate = document.getElementById("calc");

// Functions
// BASIC CALCULATOR FUNCTIONS: ADD, SUBTRACT, MULTIPLY, DIVIDE

// SAVE RESULT OF CALCULATING TWO NUMBERS
const addTwoNumbers = (num1,num2) => num1 + num2;
const subtractTwoNumbers = (num1,num2) => num1 - num2;
const multiplyTwoNumbers = (num1,num2) => num1 * num2;
const divideTwoNumbers  = (num1,num2) => num1 / num2;
const percentTwoNumbers = (num1,num2) => num1 * (num2/100);

const calculateTwoNumbers = (num1, operator, num2) => {
    console.log (`Calculate... ${num1} ${operator} ${num2}`);
    
    // operator;
    console.log(`Input 1 ${num1} is a ${typeof num1}`)
    console.log(`Input 2 ${num2} is a ${typeof num2}`)
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

    // if outputText [0-9],[.] 
    
    //     if operator is null/blank:
    //        append to string Array number1
    //     else 
    //         assign my string array to number2
    
    // else if outputText != "="
    //     assign operator;

    //     else
    //         pass num1, num2, operator if equal
        
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
                console.log(resultText.innerHTML);
            } 
            break;
        // case "AC": // CLEAR DISPLAY AREA
        //     numEntry = "";
        //     inputText.innerHTML = "";
        //     resultText.innerHTML = numEntry;
            
        case "+":
        case "-": 
        case "*": 
        case "/":
            operator = outputText;
            console.log(operator);
            if (num1Str === "") {
                num1Str = operator + numEntry;
                num1 = Number(num1Str);
                console.log(num1);
                console.log(num1Str);    
            } else {
                num2Str = operator + numEntry;
                num2 = Number(num2Str);
                outputText.innerHTML = num2Str;
                console.log(num2);
                console.log(outputText.innerHTML);    
            }
            numEntry = numEntry + outputText;
            inputText.innerHTML = numEntry;
            numEntry = "";
            break;
        case "=":
            if (operator != "=") {
                num2Str = operator + numEntry;
                num2 = Number(num2Str);
                numEntry = numEntry + outputText;
                equation = `${num1} ${operator} ${num2}`;
                inputText.innerHTML = equation;
                resultText.innerHTML = calculateTwoNumbers(num1, operator, num2); 
                console.log(resultText.innerHTML);
            }
            break;
        case "+/-":
        case "%":
            break;
        default: 
            break;
    }

});
    AC.addEventListener("click",(event) => {
    inputText.innerHTML = "";
    resultText.innerHTML = "";
    numEntry="";
    return;

})
// -----------------------------------------------------------
// const num1 = Number(prompt("First number: "));
// const operator = prompt("Operator: ");
// const num2 = Number(prompt("Second number: "));
// const num1 = 100;
// const operator = "/";
// const num2 = 5;
});
