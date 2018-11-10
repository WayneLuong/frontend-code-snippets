//----------Add to start and end of array-------------

var myArray = ['a','b', 1, 2]

myArray.push('end')
myArray.unshift('start')

//ES6
myArray = ['start', ...myArray, 'end']


//------------Remove from start/end array----------------

myArray.shift()
myArray.pop();

console.log(myArray);

/* ------------splice (add/remove any element)------------- */
//splice(where it is spliced in, how many elements removed, parameters added)

myArray.splice(2,0,'Lemon', 1);

console.log(myArray);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits

/* -----------Concat------------ */

var one = [1,2,3]
var two = [4,5,6]

var three = one.concat(two); //Joins two or more arrays and makes a new array

/* -----------Slice------------ */
//Takes out a part of an array

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3); //RESULT: [Orange,Lemon,Apple,Mango]

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //RESULT: [Orange,Lemon]

/* -----------toString()------------- */
//array to string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); //RESULT:"Banana", "Orange", "Apple", "Mango"


/* -----------join()------------- */
//like toString but can add a seperator

fruits.join(" * "); //Banana * Orange * Apple * Mango


/* ---------------SORTING-------------------- */
//Alphabetical or numerical
var fruits = [2, 1, "Apple", "Mango"];
fruits.sort(); //RESULT [1, 2, "Apple", "Mango"]

console.log(fruits);

/* ----------Reverse----------------- */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits 
fruits.reverse();     // Then reverse the order of the elements

/* 
filter
map
split
find
lastindexof
indexOf
some
every
reduceRight
reduce
compare
*/