/* Promises allows asynchronous events */

//http function
function getData(method, url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

/* .then after the event has fired 
.catch fires when any errors*/
getData('GET', 'https://jsonplaceholder.typicode.com/todos')
.then(function(data){
    let todos = JSON.parse(data);
    let output ='';
    
    for (let todo of todos){
        output += 
        `<div>
            <h3>${todo.title}</h3>
        </div>`;
    }
    document.getElementById('template').innerHTML = output;

}).catch(function(err){
    console.log(err)
});


/* -----------ASYNC//AWAIT----------- */
async function init(){
  await createPost({title: 'title', body: 'content'})
  //wait for create post then fires gets post
  getPost();
}

init();

/* -----------ASYNC//AWAIT/FETCH----------- */

//FETCH API to get http requests

async function fetchUsers(){
  const res= await fetch('https://jsonplaceholder.typicode.com/todos');
  //fetch -- first promise calls res.json
  const data =  await res.json();

  console.log(data);
}

fetchUsers();