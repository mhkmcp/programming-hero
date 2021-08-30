const numbers = [15, 23, 546, 42, 107];

console.log(numbers);
console.log(...numbers);

const mx = Math.max(23, 24, 22);
console.log('mx: ', mx);

// const Max = Math.max(numbers);
const Max = Math.max(...numbers);
console.log(Max);

const numbers2 = [27, ...numbers, 99];
numbers.push(55);
console.log('numbers1: ', numbers);
console.log('numbers2: ', numbers2);