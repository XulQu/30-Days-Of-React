// Hello world basics
import { countries } from './countries.js';
import { web_techs } from './web_techs.js';

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
const removeHoney = shoppingCart.splice(honeyVar, 1);
console.log(shoppingCart);

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries.indexOf('Ethiopia'));

if (countries.indexOf('Ethiopia') === -1) {
    console.log('This array does not contain the country Ethiopia')
} else {
    console.log(`This country does contain Ethiopia, index number ${countries.indexOf('Ethiopia')}`)
}
//5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (web_techs.indexOf('Sass') === -1) {
    web_techs.push('Sass')
    console.log(web_techs);
} else {
    console.log('Sass is a CSS preprocess');
}
//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//
//Level 3
//1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);

const long = ages.length;
console.log(long);

// 4, 5 index
const median = (ages[4] + ages[5]) / 2
console.log(`Median of the ages array is ${median}`);


let sum = ages.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

let average = sum / ages.length;
console.log(average);

const rangeFunc = (x, y) => {
    return Math.abs(x - y);
}
console.log(ages[0]);

const lastElement = ages.slice(-1);
console.log(lastElement)

console.log(rangeFunc(ages[0], lastElement));
const sumCalc = 26 - 19;
// console.log(sumCalc) Test to see if correct

//1.1 Slice the first ten countries from the countries array
// countries.splice(0,10);
console.log(countries);
//1.2 Find the middle country(ies) in the countries array
let middleCountry = countries[Math.round((countries.length) - 1) / 2];
console.log(middleCountry);

//1.3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const halfCalc = countries.length / 2;

const oddEven = () => {

    if (countries.length % 2 == 0) {
        return 'EVEN'
    } else {
        return 'ODD'

    }
}

oddEven();

let arr01 = [];
let arr02 = [];

const arrayAdd = () => {

    if (oddEven() === 'ODD') {

        for (let i = 0; i < halfCalc; i++) {

            arr01.push(countries[i])
        } console.log(arr01);
        for (let i = 0; i < halfCalc - 1; i++) {
            arr02.push(countries[i + 92]);

        } console.log(arr02);

    } else {
        for (let i = 0; i < halfCalc; i++) {

            arr01.push(countries[i])
        } console.log(arr01);
        for (let i = 0; i < halfCalc; i++) {
            arr02.push(countries[i + halfCalc]);

        } console.log(arr02);

    }
}

arrayAdd();

//test 

console.log((arr01.length + arr02.length));

if (((arr01.length + arr02.length) / countries.length) === 1) {
    console.log(`These two arrays contain all ${countries.length} countries`)
} else {
    console.log('These do not contain the right amount of countries')
}

// test complete

//
// Notes on Coditionals 
//

let num01 = -3;
if (num01 > 0) {
    console.log(`${num01} is a positive number`);
} else {
    console.log(`${num01} is a negative number`)
}

// it works with booleans values too

let isRaining = true;
if (isRaining) {
    console.log(`It's raining out here`)
} else {
    console.log(`It ain't raining ladies and gentlemen`)
}

// if else

let num02 = 0;
if (num02 > 0) {
    console.log(`${num02} is a positive number`)
} else if (num02 < 0) {
    console.log(`${num02} is a negative number`)
} else if (num02 === 0) {
    console.log(`${num02} is zero`);
} else {
    console.log(`${num02} is not a number`);
}


// Switch Cases

let weather = 'sunny';

switch (weather) {
    case 'rainy':
        console.log(`It's raining we are blessed`)
        break
    case 'sunny':
        console.log(`It is sunny time for a beer`)
        break
    case 'snow':
        console.log(`It's freezing out here`)
        break
    default:
        console.log(`The overseer isn't happy no weather today`)
}

// Ternary Operators

let isApocalypse = true;
isApocalypse = false;

isApocalypse ? console.log(`The Sun beckons me forth`) : console.log(`The Moon she seeks a new Hero to arise`)

//
// Conditional Exercises Level 1 
//

//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// const whatAge = prompt(`Enter your age`)
// const agePrompt = whatAge.toString();

// if(agePrompt >= 18){
//     console.log(`You are ${agePrompt} years old and ${agePrompt - 18} years older than the driving age`)
// }else {
//     console.log(`You are ${agePrompt} and ${18 - agePrompt} years too young to drive`)
// }

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const myAge = 30;
const yourAge = 28;

if(myAge > yourAge){
    console.log(`You are ${myAge - yourAge} years older than me, you old git`);
}else {
    console.log(`I am ${yourAge - myAge} years older than you`);
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
const a = 4;
const b = 3;

if(a > b){
    console.log(`${a} is greater than ${b}`);
}else {
    console.log(`${b} is greater than ${a}`);
}

b < a ? console.log(`${b} is less than ${a}`) : console.log(`${a} is less than ${b}`)

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const checker = prompt(`Enter Number between 1-100`);

if(checker % 2 === 0){
    console.log('Number is EVEN')
}else {
    console.log('Number is ODD')
}

//
//Level 2 Conditional Questions
//



