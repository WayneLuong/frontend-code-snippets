//Comments
/* javascript.js*/

//setup page once loaded
window.addEventListener('load', setup(), false);
function setup(){
    //add code to setup when page loads
}

//--------------------------Onclick function---------------------------------
function changeCol (){
    var el = document.getElementById("change");
    //Change CSS property
    el.style.color = "blue"
    el.style.fontWeight ="bold"
}

//-------------------------------- Event Listeners-----------------------------
//More updated

var el = document.getElementById("username");

//adds a event listener for when the element loses focus
//this can be used for any other event listener shown below
el.addEventListener('blur', checkUsername, false);

//--Event listener with no parameters--
function checkUsername() {
    console.log("test");
    var el = document.getElementById("validation");
    el.textContent ="Enter a username!";
}

//-Event listener with parameters--
var subBtn = document.getElementById("submit");

subBtn.addEventListener('click', printUsername, false);

function printUsername(){
    event.preventDefault();
    console.log("button clicked");

    var el = document.getElementById("username");
    alert("Your username is " + el.value);
}

//-------------------Event listener passing parameters----------------------

var pass = document.getElementById("password");

//passes a integer to check for password length
pass.addEventListener('blur', function(){
    checkPassword(5);
}, false);

function checkPassword(minVal) {
    console.log(minVal);
    if (pass.value.length <= minVal) {
        alert("Password must be more than 5 characters");
    } else if (pass.value.length > minVal) {
        alert("Password OK");
    }
}

/* ------------- Finding X Y mouse positions ---------------------- */

/* var Y = document.getElementById ("Y");

function  showPosition (event){
    Y.value =  event.screenY;
}

var el2 = document.getElementById('body');
el2.addEventListener('mousemove', showPosition, false); */

/* Keyboard events */

var textarea = document.getElementById("char").value;
var elarea = document.getElementById("char");

elarea.addEventListener('keyup', charCount, false);
// elarea.addEventListener('keyup', charCount(), false);
//Adding () executes the function imediately when page is loaded

function charCount(e){
    var i = "Character count: " + elarea.value.length;
    //count.innerHTML += i;
    alert(i);
}

/*--------------------------------  HTML5 events---------------------------- */

//Can be used to setup page onc DOM loads to make it seem faster
function setup() {
    console.log("DOMContentLoaded event triggered");
    //focus on username input box immediately() when DOM loads
    el.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

//Executes if user tries to leave page
window.addEventListener('beforeunload', function(event){
    var message = "You have changes not saved..";
    (event || window.event).returnValue =  message;
    return message;
});

setTimeout(alert("timeout event"), 3000); //set a event after a certain time

/* Different event types 
    load
    unload
    error
    resize
    scroll
    keydown
    keyup
    keypress
    click
    dblclick
    mousedown
    mouseup
    mousemove
    mouseover
    mouseout
    focus
    blur
    input
    change
    submit
    reset
    cut
    paste
    copy
    select
*/

/*----------------------- Supporting older versions of IE --------------------------*/

/* Fallback code */

if (el.addEventListener) {      //If browser supports this
    el.addEventListener('blur', function(){
    checkUsername();
}, false);

} else {    //Use fallback older code
    el.attachEvent('onblur', function(){
        checkUsername();
    });
}


