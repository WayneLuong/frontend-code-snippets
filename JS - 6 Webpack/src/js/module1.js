//jquery loaded only into this module (makes loading faster)
var $ = require('jquery');

$('h2').append(' appended text.');

console.log('This is module 1');

//export to main.js
 export function logging (x){
    console.log(x)
}

//exporting a cobject for main.js to create new instances of that object/class
export class test {
     /* x = 'one'; */
    createAlert(){
        alert('alerting')
    }
}

