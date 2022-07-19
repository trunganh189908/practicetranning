// Js number
const a = 3;
const b = 3.13;
console.log(a)

// Sum number
var c = 0.2 + 0.9; //=> wrong answer
var c = (0.2 * 10 + 0.9 * 10) / 10; //=> 1.1

var d = "x";
var e = 10;

var f = d + e; // => x10(string)

// NaN
const h = isNaN(9);
console.log(h); // false
const k = isNaN(4 - 'hello');
console.log(k); // true

// Infinity
const y = 2 / 0;
console.log(a); // Infinity
const m = -2 / 0;
console.log(a); // -Infinity

// BigInt value
const value = 900719925124740998n;
// Adding two 
const value1 = value + 1n;
console.log(value1);

// Number object
const f = 69;
// creating a number object
const v = new Number(469);
console.log(f); // 69
console.log(v); // 69
console.log(typeof a); // "number"
console.log(typeof b); // "object"


ch