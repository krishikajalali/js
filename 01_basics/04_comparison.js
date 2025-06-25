// // console.log(2>1)
// // console.log(2>=1)

// //>,<,>=,<=,==,!=

// console.log("2">1) //true
// console.log("02">1) //true
// //make sure datatype is same in comparison
// //typescript doesn't allow comparison of different datatypes

// console.log(null>0) //false
// console.log(null==0) //false
// console.log(null>=0) //true
//reason: >=,<,<=,> convert null to 0 and compare but == doesn't do that, it just says null == 0 is false because  it is.

// console.log(undefined>0) //false
// console.log(undefined==0) //false
// console.log(undefined>=0) //false

//OVERALL: == is not same as >=,<=,<,>

//strict check(checks datatype and then value) === (no conversion)
console.log(null===0) //false
console.log("2"===2) //false

//note: avoid comparison of unequal datatypes: can cause problem