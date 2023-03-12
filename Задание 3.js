/* Сделал для конкретной строки
let str = 'Hello';
let len = str.length; 
let str2 = `${str.slice(len-1)}${str.slice(len-2, len-1)}${str.slice(len-3, len-2)}${str.slice(len-4, len-3)}${str.slice(len-5, len-4)}`

console.log(str2); */

/* С помощью массивов для любой строки */
let str = 'abrakadabra';
const reverse = str.split('').reverse().join('');
console.log(reverse);
