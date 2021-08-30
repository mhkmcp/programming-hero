const numbers = [541, 232, 6454, 65, 78, 12, 347];

const bigNum = numbers.filter(num => num > 300);
console.log('bigNum: ', bigNum);

const oddNum = numbers.filter(num => num % 2);
console.log('oddNum: ', oddNum);

const products = [
    { name: 'mouse', price: 340 },
    { name: 'mobile', price: 43450 },
    { name: 'keyboard', price: 350 },
    { name: 'money bag', price: 750 }
]
// filter returns every matched as list
const expensive = products.filter(p => p.price > 500);
console.log('expensive: ', expensive);

// return all as a list 
const expensivOnes = products.map(p => p.price > 500);
console.log('expensivOnes: ', expensivOnes);

// find returns the first matched one as object/element
const searchedOnes = products.find(p => p.price > 500);
console.log('searchedOnes: ', searchedOnes);