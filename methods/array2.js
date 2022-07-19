// length
const num = [1, 2, 3, 4, 5, 6, 7 ,8, 9]
num.length // 4

// Push
const fruits = ['Banana', 'Orange', 'Apple']
const x = fruits.push('Mango')
console.log(fruits)

//Access elememts
const myArray = ['a', 'r', 'r', 'a', 'y'];
console.log(myArray[0]);
console.log(myArray[1]);

// Add elements
let dailyCar = ['BMW', 'Mescerde'];
dailyCar.push('Volvo');
console.log(dailyCar); 

let dailyCar1 = ['BMW', 'Mescerde'];
dailyCar1.unshift('Volvo');
console.log(dailyCar1); 

// Change elements
let dailyActivities = [ 'eat', 'sleep'];
dailyActivities[2] = 'exercise';
console.log(dailyActivities);

// Remove Element 
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];
dailyActivities.pop();
console.log(dailyActivities); 
const removedElement = dailyActivities.pop();
dailyActivities.shift();
console.log(removedElement);


