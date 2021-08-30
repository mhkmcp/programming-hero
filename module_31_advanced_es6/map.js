const numbers = [2, 4, 6, 8];

// const output = [];

// for (const number of numbers) {
//     output.push(number * 2);
// }
// console.log('map: ', output);

const doubleIt = number => number * 2;

// map 
// 1. loop through each element 
// 2. calculate/call the method 
// 3. provide output 

const output = numbers.map(doubleIt);
console.log(output)

const output2 = numbers.map(number => doubleIt(number));
console.log(output2)

const output3 = numbers.map(x => x * 2);
console.log(output3);


const friends = ["Tom Hanks", "Tom Cruise", "Tom Solaiman"];

const fLens = friends.map(f => f.length);
console.log('fLens: ', fLens);

const products = [
    { name: 'mouse', price: 340 },
    { name: 'mobile', price: 43450 },
    { name: 'keyboard', price: 350 },
    { name: 'money bag', price: 750 }
]

const productNames = products.map(p => p.name);
console.log('product names: ', productNames);

const productPrices = products.map(p => p.price);
console.log('product prices: ', productPrices);

products.map(product => console.log(product));

products.forEach(product => console.log(product));


// difference between map and forEach 
// map returns. 
// forEach doesn't returns 
