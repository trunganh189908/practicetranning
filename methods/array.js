let methods = ['array', 'string', 'number']
let extramethods = ['object'];

// sorting elements in the alphabetical order
methods.sort();
console.log(methods); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = methods.indexOf('string');
console.log(position); // 2

// slicing the array elements
const newMethods = methods.slice(1);
console.log(newMethods); // [ 'sleep', 'work']

// concatenating two arrays
const routine = methods.concat(extramethods);
console.log(routine); // ["exercise", "sleep", "work", "eat"]c