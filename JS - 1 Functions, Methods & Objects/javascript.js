//Comments
/* javascript.js*/

//----------Variables-----------//
var greet ='Hello <a href="http://wayneluong.github.io/">Wayne</a>';
let greet2='Hello <a href="http://wayneluong.github.io/">Wayne</a>';

//Selects the target element
var el = document.getElementsByClassName("greeting");
var el2 = document.getElementById("2");
//Preferred method UPDATED
/* var el3 = document.querySelector("#2"); //selects first one
var el4 = document.querySelectorAll(".greeting"); */ //selects all with this class name

//Hide .hidden
//el2.hidden= true;

//Uses straight text //Class name in index 0 similar to index in arrays
el[0].textContent= greet;
//InnerHTML Parses the string
el2.innerHTML= greet2;

//---------Arrays ------------//
var colors;
colors =['white','black', 'red'];
//var colors = new Array ('white', 'black','custom');

//Update arrays
colors[0] = 'blue';

var array = document.getElementById("array");
array.textContent= "Colour: " + colors[0] + colors[1];

//-------- Functions -----------//
var msg ="Basic Functions"

function functionTitle(){
    var el = document.getElementById('function');
    el.textContent = msg;
}

functionTitle(); 

//Functions with parameters
//Parameters can be objects, arrays, variables etc.
//Referencing objects & arrays e.g. parameterName.coords  paramenterName[2] 

function getArea(width, height) {
    return width*height;
}

document.write("2 * 4 = " + getArea(2,4)); //runs after the DOM has loaded

//-------------- Objects ------------------- //
//In an object variables are known as properties and functions are known as methods of the object
//Literal Notation - Single object
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'single'],
    checkAvailability: function(){
        return this.rooms - this.booked;
    },
    details: {      //Objects can be in objects
        ensuite: true,
        type: [1,2,3]
    }
}

//Updating properties 
hotel.booked = 35;
/* delete hotel.name; 
   hotel.name='';  */

//Accessing objects
var elName =  document.getElementById('hotelname');
var elRoomTypes = document.getElementById('roomtypes');
var elAvailability = document.getElementById('available');

elName.textContent = hotel.name;
elRoomTypes.textContent= "Room Types: " + hotel.roomTypes;
elAvailability.textContent = "Rooms available: " + hotel.checkAvailability();

//------------ OLD Creating new instances of objects-----------------
//Object Constructor - multiple instances of objects

function Book (name, author,type, year){
    this.name = name;
    this. author =  author;
    this.type = type;
    this.year = year;

    this.publish = function(){
        return this.year+ 1;
    };
    }

    var book1 = new Book ("Harry Potter", "JK Rowling",[1,2,3], 2000);  //int array
    var book2= new Book ("Game of Thrones", "George Martin", ["1","2","3"], 1990) //string array
    //log multiple fields including an array
    console.log("Book1: " + book1.name,book1.type[2], book1.year);

    // Adding () calls the object function method without () shows the function
    console.log(book2.publish);
    console.log(book2.publish());

    //Shows the array[index number] in the object
    console.log(book2.type[1]);

/* UPDATED ES6 creating new instances of objects */
/* ----------------------Classes--------------- */

class User {
    /* class attributes */
    constructor(name, email) {
        this.name = name;
        this.email = email;   
    }
    /* class methods */
    publish() {
        console.log('working');
        return this; //in order to method chain you must return this method;
    }
    write() {
        console.log('written');
        return this;
    }
}

var userOne = new User('wayne', 'example@example.com');
var userTwo = new User('ben', 'example@example.com');

userOne.publish();

/* Method chaining - use mulitple method in one line */

userTwo.publish().write();

/* ----------------------Class Inheritence --------------- */

//inherits all he user attributes and methods as well as its own e.g. admin tools
class Admin extends User{
    deleteUser(user){
        // => is function(u){} new ES6 code
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var admin = new Admin('bob', 'example@example.com');
var users = [userOne, userTwo];

admin.deleteUser(userTwo);
//wont retuen userTwo as it is false !=

console.log(users)

    //------Common built-in objects ---

    Document
    Window
    Math
    String
    RegExp
    Error
    JSON

    //--- Common Functions ---
    isNaN()
    parseFloat()
    parseInt()
    JSON.stringify()
    








