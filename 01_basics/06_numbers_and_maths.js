const score = 400
// console.log(score);

const balance = new Number(100) //same as string, has prototype which has various properties
// console.log(balance);

// console.log(balance.toString().length); //after turnig to string it has prop of string now but not in og value but a copy
// console.log(balance.toFixed(1)); //fixes decimal part length

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //returns string and precices wrt first n digits (not just the decimal but whole number)

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //puts comma according to indian style

// other number prop: MIN_VALUE, MAX_VALUE, MIN_SAFE_VALUE, MAX_SAFE_VALUE



// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //Math itself is an object (run this on console and get to know its properties)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8)); //and more

console.log(Math.random()); //any random value b/w 0 included and 1 excluded
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //min 1 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //min 10 max 20