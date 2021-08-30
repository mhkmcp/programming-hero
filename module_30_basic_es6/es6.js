// function declaration
function add(num1, num2) {
    return num1 + num2;
}
const sum1 = add(23, 53);
console.log('Sum1: ', sum1);

// function expression 
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

const sum2 = add2(23, 53);
console.log('Sum2: ', sum2);

// function expression (annonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

const sum3 = add(23, 53);
console.log('Sum3: ', sum3);

// arrow function 
const add4 = (num1, num2) => num1 + num2;


const sum4 = add4(23, 53);
console.log('Sum4: ', sum4);


const multiply = (num1, num2, num3) => num1 * num2 * num3;

console.log('Multiply: ', multiply(2, 4, 3));


// one parameter 
const fiveTimes = (num) => num * 5;

const tenTimes = num => num * 10;

console.log('fiveTimes: ', fiveTimes(4));
console.log('tenTimes: ', tenTimes(3));

// no parameter
const getName = () => 'Brandon Sam';

console.log('Name: ', getName());

// multiliner function 
const doMath = (x, y) => {
    const ad = x + y;
    const df = x - y;
    return ad * df;
}

console.log('Total: ', doMath(13, 6));

// document.getElementById('my-btn').onclick = function handleClick() {

// }


// document.getElementById('my-btn').addEventListener(event => {

// }