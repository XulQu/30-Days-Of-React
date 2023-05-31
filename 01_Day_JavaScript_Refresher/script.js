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

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [6, 7, 8, 9, 10];

const listArr = firstArr.concat(secondArr);
console.log(listArr);
// Same goes for strings and any data types * except null and others

const checkArr = ['Bleach', 'Naruto', 'One Piece', 'Soul Eater', 'Deathnote', 'FireForce'];

console.log(checkArr.indexOf("Bleach"));
console.log(checkArr.indexOf("One Piece"));
console.log(checkArr.indexOf("FireForce"));

// if index of returns -1 it means something doesnt exist in an array

let index = checkArr.indexOf('One Punch Man');

if (index <= -1) {
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
const bleachArr = ['Bankai', 'Ichigo', 'Kon'];

console.log(Array.isArray(string));
console.log(Array.isArray(bleachArr));

// Change array to strings
console.log(bleachArr.toString());

console.log(bleachArr.join('* '))

//Slice method: Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numArr.slice(1, 5));
console.log(numArr.slice(0, numArr.length)); // Copies all the items

// Splice method : at starting posision, number of times to be removed and numberof items to be added

// Removes all items
console.log(numArr.splice());

// removes the first item
console.log(numArr.splice(0, 1));

// Removes 4 itesm and adds 4 items
console.log(numArr.splice(4, 4, 7, 8, 9))

//


// Push adds items to the end

const wordArr = ['Frodo', 'Legolas', 'Soul-kun', 'Shinigami-sama'];
wordArr.push('Wamiq', 'Houlbrak');

console.log(wordArr);

// Pop removes end item i.e Houlbrak

wordArr.pop();
console.log(wordArr);

// and then pop x2 will remove wamiq

wordArr.pop();
console.log(wordArr);

// Shift removes an items from the start of the array, index 0, i.e Frodo

wordArr.shift();
console.log(wordArr);

// Unshift like push , adds an item, but the the start of the array

wordArr.unshift('Galadriel');
console.log(wordArr);


// Reverse. Reverses order of array
const order = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(order);

order.reverse();

console.log(order);

const alpha = ['Bastet', 'Chronos', 'Abraxus', 'a', 'b', 'c'];
console.log(alpha);
alpha.sort();

console.log(alpha);

const arrayOfArrays = [
    [1, 2, 3],
    ['a.8', 'b', 'c'],
];

console.log(arrayOfArrays[1]);

// EXCERCISES JAVASCRIPT

//1. Declare an Empty array
const emptyArr = [];
console.log(emptyArr);
//2. Declare an array with more than 5 number of element
const moreThanFive = [0, 1, 2, 3, 4, 5];
console.log(moreThanFive);
//3. Find lenght of your array
console.log(moreThanFive.length);
//4. Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0]);
console.log(moreThanFive[5]);
console.log(moreThanFive[2]);
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['String', true, 0, '', null, { name: 'Wamiq' }];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7. Print the array using console.log()
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
//9. Print the number of companies in the array
//Middle
let middle = itCompanies[Math.round((itCompanies.length - 1) / 2)];
//Start
let start = itCompanies[0];
//End
let end = itCompanies[itCompanies.length - 1];
console.log(middle);
console.log(start);
console.log(end);
//10.print out each company
const stringify = itCompanies.toString(',');
console.log(stringify);
//11. Change each company name to uppercase one by one and print them out
const bold = itCompanies.toString(',');
const up = bold.toUpperCase();
console.log(up);
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(stringify);
//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const check = itCompanies.indexOf('IBM');
if (check != -1) {
    console.log(`${itCompanies[check]} was found`);
} else {
    console.log(`Company was not found`);
}
//14. Filter out companies which have more than one 'o' without the filter method

const filteredArray = [];

for (let i = 0; i < itCompanies.length; i++) {
    const currentItem = itCompanies[i];
    let count = 0;

    for (let j = 0; j < currentItem.length; j++) {
        if (currentItem[j] === 'o') {
            count++;
        }

        if (count > 2) {
            break;
        }
    }

    if (count !== 2) {
        filteredArray.push(currentItem);
    }
}

console.log(filteredArray);

//15. Sort the array using sort() method
console.log(itCompanies.sort())
//16. Reverse the array
console.log(itCompanies.reverse());
//17. Slice out the first 3 companies from the array
    // console.log(itCompanies.splice(3,4));
//18. Slice out the last 3 companies from the array
    // const takeout = itCompanies.splice(-3,3);
    // console.log(itCompanies);
//19.Slice out the middle IT company or companies from the array
    // console.log(itCompanies[((itCompanies.length - 1) / 2)]);
//20.Remove the first IT company from the array
    // const remove = itCompanies.shift();
    // console.log(itCompanies);
//21.Remove the middle IT company or companies from the array
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
const test = Math.round((itCompanies.length - 1) / 2);
console.log(test);
const goodies = itCompanies.splice(test, 1);
console.log(itCompanies);
//22.Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
//23. Remove all IT companies
console.log(itCompanies.splice());

// Exercise Level 2
//1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
//Complete.

//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replaceAll(",", " ");
text = text.replaceAll(".", " ");

console.log(text);
const take = text.split(' ');
console.log(take);
//3. In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const addingMeat = shoppingCart.unshift('Meat');
const addingSugar = shoppingCart.push('Sugar');
const honeyVar = shoppingCart.indexOf('Honey');
const removeHoney = shoppingCart.splice(honeyVar,1);
console.log(shoppingCart);