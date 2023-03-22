
//this keyword might not always refer to what you want it to refer to, so it causes confusion. Howerever arrow fucntion solves it, because it always keeps its context and does not change it at runtime.

//if you have one argument, you can ignore the parenthesis.

//if you have to return something with no more logic than one line, you can omit the curly braces and the return keyword.

// const multiply = (number) => number *2;

// const multiple = (name) => {
// return name*2;
// }

// console.log(multiple(2))

//EXPORT AND IMPORT

//you can import and exoprt a module with javascript


// DEFAULT EXPORT

// const person = {
//     name: 'John',
// }

// export default person;


// //MULTIPLE EXPORT
// export const clean = () => {}
// export const baseData = 10;

//with named exprots(one with mulitple exports), while importing them you have to give the correct name, you cannot give it your own name like with defautl exports.


//importing default 
// import prs from './person.js'

// //importing named exporters
// import {smth} from './utility.js'
// import {smth as SMTHING} from './utility.js'
// import * as bundled from './utility.js'

//CLASSES
//they can have properties and methods, they support inheritance and they can be instanciated with new keyword.

// with ES7, you can declare property directly inside a class without constructor

// with ES7 you can assign a method to the class with arrow function, this is eliminate the use of ‘this’ keyword.

// class Human{
//     gender = 'Male'
//     printMyGender = () => {console.log(this.gender)}
// }

// class Person extends Human{
//     name = 'Mustafa'
//     printMyName = () => {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printMyGender();

//SPREAD AND REST OPERATORS

// Spread: Used to split up array elemetns OR object properties
// Eg: const newArray = [...oldArray,1,2,4]
//     const newObject = {...oldObject, newProp: 5}

//Rest: Used to merge a list of fucntion arguments into an array
// Eg: function sortArgs(...args) { return args.sort()}

// const numbers = [1,32,2,36,246,];
// const newNumbers = [...numbers, 2355,25734]
// console.log(newNumbers);

// const person   = {
//     name: 'John',
// }

// const newPerson = {
//     ...person,
//     date: 'asdar',
// }

// console.log(newPerson);

// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(filter(1,2,3));
