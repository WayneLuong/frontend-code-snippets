function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds(); //Wait until promise is resolve before log
    console.log(result);
    console.log('end');
    // expected output: "resolved"
}

//http request
/* async function asyncCall() {
    console.log('calling');
    const response = await axios.get('https://json.com/users'); //Wait until promise is resolve before log
    console.log(response.data);
    console.log('end');
    // expected output: "json data"
} */

asyncCall();

//Thenable promise
let myVariable

resolveAfter2Seconds()
    .then((res) => {
        myVariable = res
        console.log('calling');
        console.log('myVariable: ', myVariable)
        console.log('end');
    })