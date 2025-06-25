//needed when we are unsure about the datatype of the variables' value we are receiveing

let score="33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);// number

score="33abs"

valueInNumber = Number(score);
console.log(typeof valueInNumber);// number
console.log(valueInNumber)// NaN- not a number

score = null

valueInNumber = Number(score);
console.log(typeof valueInNumber);// number
console.log(valueInNumber)// 0

score = undefined

valueInNumber = Number(score);
console.log(typeof valueInNumber);// number
console.log(valueInNumber)// NaN

score = true

valueInNumber = Number(score);
console.log(typeof valueInNumber);// number
console.log(valueInNumber)// 1 , 0 for false

score ="krishika"

valueInNumber = Number(score);
console.log(typeof valueInNumber);// number
console.log(valueInNumber)// NaN



let isLoggedIn= 1
let booleanisLoggedIn= Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

/*
1 -> true
0 -> false
"" -> false
"anything" -> true
*/

let somenumber= 33
let stringnumber= String(somenumber)

console.log(typeof stringnumber)
console.log(stringnumber)


