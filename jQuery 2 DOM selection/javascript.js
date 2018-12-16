//Comments
/* javascript.js*/

/*-------------------- DOM selection--------------- */
var li = $('ul').find('li');

console.log(li);

/* Add class */

//.find .closest
$('#list').on('click', function(){
    $('ul').find('li').fadeOut().fadeIn(); //Find the li within the ul
    $(this).addClass('move'); //Add CSS class to change position
})

/* Selection  
.find()
.closest()
.parent() .parents()
.children()
.siblings()
.next() .nextAll()
.prev() .prevAll()

Filters

.add()
.filter() filter by css element
.not()/ :not()
.has() / :has() (this).has('li') or ('li:has')
:contains()

Cutting and copying

.remove()   remove matched elements
.detach()
.empty()    remove child node and descendents
.unwrap() remove parent node

.clone()    makes a copy of the matched set

*/


/* -----------------Form Selection-------------- */

$('#subBtn').on('submit', function(e){
    e.preventDefault()
    var el = $('#name');
    var elVal = el.val();
    console.log(elVal);
});

/* 

.val()

.filter()
.is()
.isNumeric()

.on()

.blur()
.change()
.focus()
.select()
.submit()
 */



