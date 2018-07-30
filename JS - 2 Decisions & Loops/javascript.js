//Comments
/* javascript.js*/


/* ----------Switch Case statement ------------ */
function getGrade() {
    var el = document.getElementById("grade").value;
    //string is created as new string in order to upper case
    el = el.toUpperCase();
    console.log(el);
    //prevent default behaviour of page
    event.preventDefault();

    switch (el) {
        case 'A':
            alert("A grade: Pass");
            break;
        case 'B':
            alert("B grade: Pass");
             break;
        case 'C':
             alert("C grade: Pass");
              break;
        case 'D':
             alert("D grade: Fail");
             break;
        case 'E':
             alert("E grade: Fail");
             break;
        case 'F':
              alert("F grade: Fail");
             break;
        default: /* default behaviour if no case matches */
            alert("Enter a valid value");
            break;
    }
}

/* ------------- Loops For -------------- */

function getNum(){
    event.preventDefault();

    var el = document.getElementById("num");
    var elVal = el.options[el.selectedIndex].value;
    console.log(elVal);
    
    //Check type 
    console.log(typeof(elVal));

    /* for loop - if i is less than value of elVal then stop loop*/
    for(var i = 0; i < elVal ; i++){
        alert(i);
}
}

 /*  ----------------Try Catch-------------- */
//Use to catch errors
    var x = 9;
try {
    //Block of code to try
    if (x>10) throw ("too high"); //throw lets you custom error
    if (x<10) continue; //if less than then continue running code
}catch(err){
    //Block of code to handle errors if try code doesnt run
    console.log(err.name);
}finally {
    //    Block of code to be executed regardless of the try / catch result
}


 /*  ----------------While loop-------------- 

    while (i>10) {
        //Do something
        i++;
    }

    Main difference is that while code block stops after condition is met

    do {
        //Do something
        i++
    }while (i >10); 
    
*/



/* -----------IF ------------ */
 
/* 
    if (1st condition) {
        do this
    }
    else if (2nd condition){
        do this
    } else {
        do this if none of the above conditions are met
    }

    
*/
    if(!condition) continue; //continue keyword continue if this condition

/* Logical Operators

    == Equals to (value)
    != Not Equals to
    ! Not
    > Greater than
    >=
    < Less than
    <=
    === Strict equals to (value and type)
    !== Strict not equals to
    && AND
    || OR
    NaN Not a number
    
    */
