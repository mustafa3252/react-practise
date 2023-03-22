
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

class Person{
    constructor(){
        this.name = 'Mustafa';
    }
    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();