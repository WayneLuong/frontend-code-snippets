//Comments
/* javascript.js*/

if (window.jQuery) {
    console.log("ready");
}
/* 
    $.ajax  -- (performs all requests) all methods fall under this request
    .load()
    $.get()
    $.post
    $.getJSON()
    $.getScript
*/

function addColor (object){
    $JSON.append("<br> ID: "+ i + " Eye color: " + object.eyeColor);
}

/* Cache the element for use (jQuery variables begins with $ for standard practice)*/ 
var $JSON = $('#JSON');
var $eyeColor = $('#eyeColor');

// RESTful GET POST PUT DELETE

/*  Layout
    $.ajax{
        type: POST GET example,
        url: example.com,
        success: function(){},
        error: function(){},
    }
*/
/* ------------------- AJAX GET --------------------- */

// JSON data
$.ajax ({
    type: "GET",  //GET (receive) or POST (send)
    url: "http://www.json-generator.com/api/json/get/cgjaFBVnSa?indent=2", //the JSON url or file location
    // timeout: 2000, //waiting time
    //beforeSend: function(){}, //anonymous or named function run before the AJAX request
    //complete: function(){}, //function after the request completes e.g. remove loading icon
    //data: function(data){} //the data tat is sent if it is POST
    success: function(data){ //if success (data takes in the JSON data)
        console.log("success", data);
        $.each(data, function(i, object){ //$.each similar to for loop
            $JSON.append("<br> ID: "+ i + " Eye color: " + object.eyeColor 
            + " <button id='" + i + "' class='remove'>x</button> "
            + " <button id='editBtn' class='notEdit'>Edit</button>"
            + " <button id='saveBtn' class='edit'>Save</button>");
            //addColor(object); // can be used for cleaner code
        })

        //EXAMPLE EDIT
        var el = document.getElementById('editBtn');
        var el2 = document.getElementById('saveBtn');
            el.addEventListener('click', function(){
                console.log('editing');
                $(this).removeClass('notEdit');
                $(this).addClass('edit');
                $(el2).removeClass('edit');
                $(el2).addClass('notEdit');
            });
            
            el2.addEventListener('click', function(){
                console.log('saved');
                $(this).removeClass('notEdit');
                $(this).addClass('edit');
                $(el).removeClass('edit');
                $(el).addClass('notEdit');
            });
            /////////////
    }, 
    error: function(error){ //if error
        alert("Error"); //alert error e.g. wrong spelling on url
    }, 
});

/* ------------------- AJAX POST --------------------- */

$('#addColor').on('click', function(){
    event.preventDefault(); //stop default submit from refreshing page
    
    var color = { //Create the new object to post to json file
        eyeColor:$eyeColor.val(),
        gender: "Female" //example
    }
    
    $.ajax ({
        type: "POST",
        url: "http://www.json-generator.com/api/json/get/cgjaFBVnSa?indent=2", //the JSON url or file location
        data: color, /* { eyeCOlor:$eyeCOlor.val(),
                            gender: "Female" //Same as the color object but the other way is cleaner code
        }
        data object field must be passed as POST
        */
        success: function(newColor){
            console.log("added!");
            $JSON.append("<br> ID: "+ newColor.i + " Eye color: " + newColor.eyeColor)
            //addColor(newColor); // can be used for cleaner code

        }
    })
})

/* ------------------- AJAX DELETE --------------------- */

//target parent of class
$('#JSON').on('click', '.remove', function(){
  console.log('f');
    /* $.ajax ({
        type:'DELETE',
        url:'http://www.json-generator.com/api/json/get/cgjaFBVnSa?indent=2' + $(this).attr('id'),
        success: function(){
            $(div).remove();
        }
    }) */
});

/* ------------------- AJAX PUT --------------------- */

$.ajax({
    type:'PUT',
    url: 'http://www.json-generator.com/api/json/get/cgjaFBVnSa?indent=2',
    data: function(){
    },//color, //example must be in same format as JSON data!
    success: function(){
        //Do something
    },
    error: function(){
        alert('error updating');
    }
})

/* ------------------- JQuery .serialize() --------------------- */

function showValues() {
    var str = $( "form" ).serialize(); //Turns the data into a string
    $( "#results" ).text( str );
  }
  $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
  $( "select" ).on( "change", showValues );
  showValues();

  //Returns the value as query strings, best to select individually to get values