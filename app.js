// VARIABLES

console.log ("Initialize parameters...");

let num=0;
let num1=0;
let num2=0;
let num1Str = "";
let num2Str = "";
let operator="";
let result=0;
let dotClicked = false;
let numberSign;
let numberString="";
let numEntry = "";
let outputText="";
let equalClicked = false;
opCtr = 0;

// Grabbed elements from HTML

console.log ("Grab elements...");

const inputText = document.getElementById("display-area__input");
const resultText = document.getElementById("display-area__output");
const buttonItems = document.querySelectorAll(".input");
const AC = document.getElementById("clear");
const numSign = document.getElementById("posneg-sign");

// Functions
// BASIC CALCULATOR FUNCTIONS: ADD, SUBTRACT, MULTIPLY, DIVIDE

const addTwoNumbers = (num1,num2) => num1 + num2;
const subtractTwoNumbers = (num1,num2) => num1 - num2;
const multiplyTwoNumbers = (num1,num2) => num1 * num2;
const divideTwoNumbers  = (num1,num2) => num1 / num2;
const percentTwoNumbers = (num1,num2) => num1 * (num2/100);
const posToNeg = (num) =>  -Math.abs(num);
const NegToPos = (num) =>  -1 * num;

const calculateTwoNumbers = (num1, operator, num2) => {
    console.log (`Calculate... ${num1} ${operator} ${num2}`);
    console.log(`   num1 = ${num1} (${typeof num1})`)
    console.log(`   num2 =  ${num2} (${typeof num2})`)
    console.log(`   operator is ${operator} (string)`);

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
    console.log (`Calculate function result returns ${result}`);
};



// PERFORM BASIC CALCULATOR FUNCTIONS WITH MOUSE CLICK ENTRIES ONLY

console.log ("Processing...")
buttonItems.forEach(buttonItem => {
    buttonItem.addEventListener("click", (event) => {
    event.preventDefault();

    // TAKE VALUE OF MOUSE CLICKS AND SHOW APPENDED NUMBERS ON TOP DISPLAY AREA
    
    const outputText = buttonItem.textContent;
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
            console.log(`   resultText.innerHTML = ${resultText.innerHTML}`);
            break;
        case ".":
            if (!dotClicked) {
                console.log("Entered a dot...");
                numEntry = numEntry + outputText;
                resultText.innerHTML=numEntry;
                console.log(`   resultText.innerHTML = ${resultText.innerHTML}`);
                dotClicked = true;
                console.log(dotClicked);
            }
            break;
        
        // TAKE OPERATOR AND CHANGE THE 2 INPUT STRINGS TO NUMBER TYPES 
        case "+":
        case "-": 
        case "*": 
        case "/":
        case "%":
            console.log ("Operator processing...")
            operator = outputText;
            dotClicked = false;
            opCtr ++;
            console.log(`   operator = ${operator}`);
            console.log(`   operator Counter = ${opCtr}`);

            if (num1Str === "") {
                if (operator = "+") {
                    num1Str = operator + numEntry;
                    
                    if (num1Str[1]=="-") {num1Str = numEntry;}

                } else {
                    num1Str = numEntry + operator;
                }    
                console.log(`   num1Str = ${num1Str} (${typeof num1Str})`);
                num1 = Number(num1Str);
                console.log(`   num1 = ${num1} (${typeof num1})`);
                console.log(`   num1Str = ${num1Str} (${typeof num1Str})`);
            } else {
                num2Str = numEntry;
                num2 = Number(num2Str);
                outputText.innerHTML = num2Str;
                console.log(`   num2 = ${num2} (${typeof num2})`);
                console.log(outputText.innerHTML);    
            }

            operator = outputText;
            numEntry = numEntry + outputText;
            inputText.innerHTML = numEntry;
            numEntry = "";
            console.log(`   inputText.innerHTML = ${inputText.innerHTML} (string)`);
            break;
        
        case "+/-":
                num = resultText.innerHTML;
                console.log(`num = ${num} (${typeof num}`) ;
                num = Number(num);
                console.log(num);
               
                if (num >=0) {
                    numEntry = posToNeg(num);
                } else numEntry = NegToPos(num); 
                resultText.innerHTML=numEntry;

                console.log(num);
                console.log(resultText.innerHTML);
                console.log (numEntry);
                break;


        //CALCULATE RESULTS BASED ON GIVEN 2 NUMBER INPUTS AND THE OPERATOR    
        case "=":
            if (opCtr !== 0) {
                num2Str = numEntry;
                num2 = Number(num2Str);
                equation = `${num1} ${operator} ${num2}`;
                numEntry = equation;
                inputText.innerHTML = equation;
                console.log(`   operator Counter = ${opCtr}`);
                console.log(`Displayed equation for inputText.innerHTML = ${inputText.innerHTML}`);
                console.log(`Displayed total for resultText.innerHTML = ${resultText.innerHTML}`);
                resultText.innerHTML = calculateTwoNumbers(num1, operator, num2); 
                opCtr = 0;
                console.log(`   operator Counter = ${opCtr}`);
                console.log(`Displayed equation for inputText.innerHTML = ${inputText.innerHTML}`);
                console.log(`Displayed total for resultText.innerHTML = ${resultText.innerHTML}`);
            }    
            break;
        default: 
            break;
    }
    
});

AC.addEventListener("click",(event) => {
inputText.innerHTML = "";
resultText.innerHTML = "";
numEntry="";
console.log(`Clear = inputText.innerHTML = ${inputText.innerHTML}`)
console.log(`Clear = resultText.innerHTML = ${resultText.innerHTML}`)
num1=0;
num1Str = "";
opCtr = 0;

})

});