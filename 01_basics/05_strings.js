// concatination : +

const name= "krishika"
const repocnt= 50

// console.log(name+repocnt+" value"); //outdated

// //string interpuation using placeholders- used nowdays
// console.log(`Hello my name is ${name} and my repo count is ${repocnt}`);

const gamename= new String("krishika") //string is object- same as above declaration but this one gives access to various functions in prototype

// String Declaration in JavaScript – Summary

// String Literal ("hello")

// Most common and recommended way.

// Creates a primitive string.

// typeof "hello" → "string"

// Use this in most cases.

// String("hello")

// Converts values to string.

// Also returns a primitive string.

// typeof String("hello") → "string"

// Useful for type conversion (e.g., String(123) → "123").

// new String("hello")

// Creates a String object, not a primitive.

// typeof new String("hello") → "object"

// Should be avoided, as it can cause unexpected behavior ("hello" === new String("hello") → false).

// ✔️ Recommendation:
// Use string literals or String() for conversion.
// Avoid new String() unless object behavior is explicitly required.

// console.log(gamename[0]);
// console.log(gamename.__proto__)// this will return empty object but this object has various funtions that can work on it: to see those do this on browser console

//++++++++lets access some of them++++++++++

console.log(gamename.length); //8
console.log(gamename.toLocaleUpperCase()); //KRISHIKA    --no need of doing str.prototype.function(), it is directly accessed. Will see later how
// original string is not changed
// In JavaScript, strings are immutable, meaning any method like .toLocaleUpperCase() or .toUpperCase() doesn't change the original string—it returns a new one. So when you do gamename.toLocaleUpperCase(), the original gamename remains unchanged. Behind the scenes, JavaScript temporarily wraps the primitive string into a String object to access methods like .length or .toUpperCase(). Once the method executes, the object is discarded, and the original primitive string remains untouched.

console.log(gamename.charAt(5)); //return char at given index
console.log(gamename.indexOf('t')); //return index of first occurance of given char, returns -1 if not found

const newStr= gamename.substring(-7,2) //if we give -ve value here it considers it 0
console.log(newStr)

const anotherStr = gamename.slice(-5,7) //takes negative value also from -5th index i.e. length-5 to 7th index (excluded)
console.log(anotherStr)

const newStr1= "  krishika   "
console.log(newStr1)
console.log(newStr1.trim()) //removes start and end spaces, works on white space and new line. trimStart and trimEnd also exist

const url = "https://kj%20haha.com" //space in url is turned to %20

console.log(url.replace('%20','_')) //https://kj_haha.com

console.log(url.includes("kj")) //true

const somth= new String('kj-is-a-gentleman');
console.log(somth.split('-')) //default is nothing-> it won't split just put whole thing in list. other parameter is limit(till what index do u split).
