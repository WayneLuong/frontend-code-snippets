//Comments
/* javascript.js*/

/* Sign up and get API key */

/*  EXAMPLE

Send all data requests to: (receives JSON data)
http://www.omdbapi.com/?apikey=[yourkey]&
Poster API requests:
http://img.omdbapi.com/?apikey=[yourkey]&

API KEY: 50037f28
OMDB API + KEY: http://www.omdbapi.com/?i=tt3896198&apikey=50037f28 

e.g.
Searching batman in year 2000
t = title y=year
http://www.omdbapi.com/?t=batman&y=2000
*/
var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=50037f28';
//Basic request to get API data
var request= new XMLHttpRequest();

request.open('GET', url);
request.onload = function(){
    console.log(request.responseText);
};
request.send(null); //send nothing in parameter as GET

//----------------Get movie data------------

var movBtn = document.getElementById('movBtn');
var movieEl = document.getElementById('movie');

movBtn.addEventListener('click', function(){
    var request2= new XMLHttpRequest();

    console.log('working');
    request2.open('GET', url);
    var movie = request2.responseText;
    request2.onload= function (){
        console.log(movie);
        //movieEl.textContent = movie;
    };
    request2.send();
})