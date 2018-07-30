//Comments
/* javascript.js*/

//---------------------Basic JSON request--------------------------
//JSON URL
/* var newRequest = new XMLHttpRequest();
newRequest.open('GET', 'http://www.json-generator.com/api/json/get/ceeRZxNWzS?indent=2')
newRequest.onload = function(){
    console.log(newRequest.responseText);
};
newRequest.send(); */

//JSON file
/* var newRequest = new XMLHttpRequest();
newRequest.open('GET', 'generated.json')
newRequest.onload = function(){
    console.log(newRequest.responseText);
};
newRequest.send(); */

//-----------------------Getting Data & error handling------------------------------
var newRequest = new XMLHttpRequest(); //Open a request
newRequest.open('GET', 'http://www.json-generator.com/api/json/get/ceeRZxNWzS?indent=2')

newRequest.onload = function(){ //Onload do this

    //error handling if server error e.g. 404
    if (newRequest.status >= 200 && newRequest.status <400) {
        //console.log(newRequest.responseText); //Show the data

        var ourData = JSON.parse(newRequest.responseText); //JSON data must be parsed to let the broswer know it is a JSON object

         //log the object
         console.log(ourData[0]);

    } else {
        console.log("the error");
    }
    
    
};

newRequest.onerror = function(){ //on error do this
    alert("Connection Error"); //example
};

newRequest.send(); //Send the request to recieve the JSON data

//-------------------AJAX request using button-------------------------
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    
    //Using the request shown above
    var ourData = JSON.parse(newRequest.responseText); 

    renderHTML(ourData); //seperate function passing the JSON data
   
});

function renderHTML(data){
    var htmlString = '';

    //Loops through and prints json data into div
    for (i=0; i<data.length; i++){
        //takes the object values
        htmlString += '<p>' + data[i].name +  ' likes eating ' + data[i].favoriteFruit 
        + ' with their friends: ';

        //nested for loop
        //iterate through the array within the array from the JSON data
        for(ii=0; ii< data[i].friends.length; ii++){
            htmlString +=   ', ' + data[i].friends[ii].name;
        }

        //Ending p tag
        htmlString += ' </p>'
    }

    var text = document.getElementById('jsonData');
    //Insert additional HTML each time
    text.insertAdjacentHTML('beforeend', htmlString);
}