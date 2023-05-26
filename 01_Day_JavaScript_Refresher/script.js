// Hello world basics

let element = 'This is an external script in action';
console.log(element);

// 1. Variables:

let firstName = 'Wamiq';
firstName = 'XulQu'
// Let variables allow you to reattribute values to them later in your code

let pie = 3.14;
console.log(pie);

// Using CONST to declare a variable means it cannot be reassigned later in the program.

// Data Types 

// Numbers
let num = 1;
// Boolean, either true or false
let both = false;
// Strings
let word = 'word';
// null
// let void = null;
// Undefined
let notLikeThis = '';

// Examples of arrays with Variables

const numbers = [0, 3.14, 9.81, 37, 98, 100];
const fruits = ['apples', 'pears', 'banana', 'mango', 'oranges'];

// how to check the length of an array with a method

console.log(numbers.length);
console.log(fruits.length)

// Remember that arrays start on the value of '0' being in the first place in the item, indexs,  however length counts from 1

// Exmaple of using Split method

let js = 'JavaScript';
let apart = js.split('');
console.log(apart);
console.log(apart.length)

// This is an example of split being used for a string containing various variables

let codingLanguages = 'Javascript, Java, Python, C#, Rust, React, Typescript';
const languages = codingLanguages.split(',');
// NOTE ABOVE, what appears in the parenthesis can be a space or any other form of character used to split up the given array

console.log(languages);
// Accessing array based on Index, starting at 0 in position 1;

console.log(languages[0]);

let lastIndex = languages.length - 1;
console.log(languages[lastIndex]);

// ARRAY METHODS : methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift//

const arr = Array();
const tenEmpty = Array(10)
console.log(tenEmpty);

// Remember to invoke the 'Array' ''function''*, used instead of the array name i.e 'arr' in order to add in 10 empty array items

// FILL
const twelveEmpty = Array(12).fill('X');
console.log(twelveEmpty);
// Other variables can be used in place of "x" including numbers

// Test fill false
const bool = Array(10).fill(false);
console.log(bool);  

// Concat arrays (Adding two arrays together)

const firstArr = [1,2,3,4,5];
const secondArr = [6,7,8,9,10];

const listArr = firstArr.concat(secondArr);
console.log(listArr);
// Same goes for strings and any data types * except null and others

const checkArr = ['Bleach', 'Naruto' , 'One Piece', 'Soul Eater', 'Deathnote', 'FireForce'];

console.log(checkArr.indexOf("Bleach"));
console.log(checkArr.indexOf("One Piece"));
console.log(checkArr.indexOf("FireForce"));

// if index of returns -1 it means something doesnt exist in an array

let index = checkArr.indexOf('One Punch Man');

if(index <= -1) {
    console.log(`This anime is not on this list`)
} else {
    console.log(`${checkArr[index]} is on this list at ${index}`);
}

// Last of will return indexed location or -1 if it cannot be found

console.log(checkArr.lastIndexOf('Soul Eater'));

// includes does not return -1, it returns a boolean of false if it cannot be found

console.log(checkArr.includes('Deathnote'));
console.log(checkArr.includes('GTO'));

const string = 'Bankai';
const bleachArr = ['Bankai', 'Ichigo' , 'Kon'];

console.log(Array.isArray(string));
console.log(Array.isArray(bleachArr));