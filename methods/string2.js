// Access String
const a = 'hello';
console.log(a[1]); 
console.log(a.charAt(1));

//Change varible for string
let say = 'hello';
say = 'Hello';
console.log(a); // => Hello 

// Case-Sensitive

const mes = 'messenger';
const mes2 = 'Messenger'
console.log(mes === mes2); // => false

// Multiline Strings
const message1 = 'Hello' +
    'Hi' + 
    'in the code.'
const message2 = 'Hello\ Hi \
in the code.'
