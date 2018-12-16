//Comments
/* javascript.js*/

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Yeah!");
    } else {
        // jQuery is not loaded
        console.log("Doesn't Work");
    }
}
/* $ shorthand for jquery functions */

//Check document is ready
$(document).ready(function(){

});
$(function(){
    //Shorthand ver
});

/* -----------------------jQuery Selectors--------------- */
/* jquery uses CSS style selectors id = #test  class = .test*/

$('#idEl').hide().fadeIn(1500);

//can use multiple events
$('.classEl').on('click mouseover', function(){ // .on is more intuitive than .click .blur etc
    this.remove();
});

/* Selecting elements: gt = greater than, lt= less than (index) */
$('li:lt(2)').hide().fadeIn(1500);
//$('$ul')

/* :header selects all headers h1-h6 */
$(':header').addClass ('headline');

//Vanilla javascript also uses css style selectors
document.querySelector(".classEl").style.color="red";
console.log(document.querySelectorAll("li").length);

/* -----------------------Get and Set data--------------- */
//GET
var content = $('#colors').html(); 
var content2 = $('#colors').text(); 
var content3 = $('#colors').val(); //Val gets input from <input> or <textarea>
console.log(content);
console.log(content2);  //.html will include the html

//SET
$('#idEl').html('Hello Worlds');
//add to the list
$('#colors').append('<li>Green</li>');
$('#colors').prepend('Black');

//$('#colors').remove();
//$('#colors').replaceWith("Null");

/* -------------------Changing CSS----------------------- */

$('#idEl').css('color','blue');

//multiple properties
$('#idEl').css({
    'font-family': 'Courier',
    'padding-left': '+=20'
});

/* -------------Each ---------- */
//apply to all of the selected element
$('li').each(function(){
    var i =this.id; //the id of each list item
    $(this).append(' ' + i);
});

/*-------------------- Events object--------------- */

/* .on(events[, selector][, data], function(e){}) 
.on('click mouseover', :not(#four), {status: important}, function(e){})
*/

$('.classEl').on('mouseover', function(e){
    var date = new Date();
    Date.now();
    var clicked = date.toDateString();
    $('#timestamp').append("Time: " + clicked);
});


/* ------------------Effects ---------------------- */

//toggle button to hide text
$('#fadeBtn').on('click', function(){
    $('#fade').fadeToggle();
});

$('#slideBtn').on('click', function(){
    $('#slide').slideToggle(2000); //time it takes
});

//---------------Custom animations------------------ .animate()

//.animate({CSS styles you want to animate}, [speed], easing, [what to do after it completes e.g. functions])
$('#animateBtn').on('click', function(){
    $('#animate').animate({//css style
        opacity: 0.0,
        paddingLeft: '80px'
    }, 2000, //Speed
    'swing', //Ease (swing or linear)
    //Additional event after initial animation finishes
    function(){ //complete function to bring the text back to original position
        console.log('Animation complete');
        $('#animate').css({
            'opacity': '1.0',
            'padding-left' : '0'
        });
    });
});

/* 
* All elements
element element name
#id
.class
selector1, selector2 multiple elements

-------------------------Filters-----------------
:not(selectors)
:first
:last
:even
:odd
:eq(index) equal
:gt(index)
:lt(index)
:contains('text')
:empty
:has(selector) e.g. div:has(p) all divs that contains p element
:hidden
:visible
[attribute]
[attribute ='value'] [attribute !='value'] 

All forms e.g
:input :reset :password :selected :checked

*/

/* -----------Doing things with your selections-------------------- */

/* 

.fadeIn() .fadeOut() .fadeToggle()
.show() .hide() .toggle()
.height() .width() 
$(window).height() $(document).width()
.offset()
.position()
.ready()
.load()
.on() e.g. .on('click', function(){})
.submit()
.hover()
.click()
.animate()
.delay()
.stop()
.slideUp() .slideDown() .slideToggle()
.attr() get or set a attribute
.addclass()
.removeclass() .removeAttr()
*/

