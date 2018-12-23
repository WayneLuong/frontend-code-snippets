// ------------------------IMPORT/EXPORTS-----------------------
<script type="module" src="example"></script> --type="module" allows for import/exports

import { defaultExport } from "module-name"; - function
import  defaultExport  from "module-name"; - file

export default class Menu; - class
export default {Menu}; - function

// ------------------------CONST & LET-----------------------
let name = 'John';
let test;

name = 'Jack';

const person = {
  name: 'John',
  age: 33
};

person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5);

// ----------------ARROW FUNCTIONS-----------------------

function sayHello() {
  console.log('Hello');
}

const sayHello = name => console.log(`Hello ${name}`);

const fruits = ['Apples', 'Oranges', 'Grapes'];

//---------------------------- FOREACH--------------------------------
fruits.forEach((fruit, index) => console.log(fruit));

// MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

//-- FILTER--
const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

const people2 = people.filter(person => person.id !== 2);

// -------------------SPREAD------------------------

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

const person1 = {
  name: 'Brad',
  age: 36
};

const person2 = {
  ...person1,
  email: 'brad@gmail.com'
};

// -----------------DESTRUCTURING----------------------------

const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};

const { name, address, hobbies } = profile;
const { street, city } = profile.address;

// --------------------CLASSES----------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Sara', 28);

// ---SUBCLASSES;---
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);

// ----MODULES----

// file 1 (file1.js)
export const name = 'Jeff';
export const nums = [1, 2, 3];
export default Person;

// // file 2 (file2.js)
import { name, nums } from './file1';
import Person from './file1';

//--------------------------PUSH // CONCAT-------------------------
var arr1 = [‘a’, ‘b’, ‘c’];
var arr2 = [‘d’, ‘e’, ‘f’];
var arr3 = arr1.push(arr2);
console.log(arr3); // 4
console.log(arr1); // [“a”, “b”, “c”, [“d”, “e”, “f”]]

var arr1 = [‘a’, ‘b’, ‘c’];
var arr2 = [‘d’, ‘e’, ‘f’];
var arr3 = arr1.concat(arr2);
console.log(arr3); //[“a”, “b”, “c”, “d”, “e”, “f”]

//-------------------FIND----------------------
pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');
console.log(pet); // { type: 'Dog', name: 'Tommy' }

//--------------------------IF ELSE -------------------------

var id = 1
var id2 = 2
//IF id equal to id2 then id = 5 else id is same
id === id2 ? (id = 5) : id
let visible = true;

visible ? (console.log('visible is true')): null

//-----------------------FOR//OF------------
for(i=0; i>data.length; i++){
  //Do something
}

for(let i of data.length) {
  //Do something
}

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

