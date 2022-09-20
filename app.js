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

alert (`${equation} = `);
alert (calculateTwoNumbers(num1,operator,num2));

console.log (`${equation} =`)
console.log (calculateTwoNumbers(num1,operator,num2));
