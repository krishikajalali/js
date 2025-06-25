// catergoried on basis of either call by value or call by reference 

// Primitive(call by value: copies made)

// 7types : string, number(decimal + integer), boolean, null, undefined, Symbol(unique), BigInt

//let user; is same as let user= undefined;

// const id= Symbol ('123')
// const anotherid= Symbol('123')
// console.log(id) //Symbol(123)
// console.log(anotherid) //Symbol(123)
// console.log(id==anotherid) //false

// const bigNumber = 3456789123782358748765n //bigint
// console.log(typeof bigNumber)//bigint



// Reference type (Non primitive)

// Arrays, Objects(imp), Functions

const heros=["shaktiman", "naagraj", "doga"] //array
console.log(typeof heros) //object

// let myOBJ={
//     name:"KJ"
//     age:22
// } //object

// const myFunc= function(){
//     console.log("HW")
// } //typeof: function object

// myFunc() //call




// javascript is dynamically typed (typescript is not: type dena pdta hai)

//refer documentations to see result of typeof for different variables

// *******************************************************************************************

// MEMORY ALLOCATION

// old langs- allocations and deletion all user had to do
// modern and mid modern langs- garbage collectors do

//primitive - stack memory (copy)
//non primitive - heap memory (reference: og)

let a= 10
let b= a

console.log(a) //10
console.log(b) //10

a = 5

console.log(a) //5
console.log(b) //10

let user1 = {
    name: "KJ",
    age: 10
}

let user2= user1

user1.name= "JK"

console.log(user2) //name: 'JK'