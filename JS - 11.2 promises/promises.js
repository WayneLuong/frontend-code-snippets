const posts = [
    { title: 'title one', body: 'Description 1' },
    { title: 'title two', body: 'Description 2' }
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
            document.body.innerHTML = output
        })
    }, 1000);
}

//--------------------Promises-----------------//
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false

            posts.push(post)

            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000);
    })
}

/* createPost({ title: 'title three', body: 'Description 3' })
    .then(getPosts)
    .catch(err => console.log(err)) */

//-------------------------ASYNC/AWAIT----------------------//
/* async function init() {
    await createPost({ title: 'title three', body: 'Description 3' })
    getPosts()
}

init() */

//-----------------------------ASYNC/AWAIT/FETCH--------------------//
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    console.log(data)
    return data
}

//fetchUsers()

//Wrap in async function
(async () => {
    let val = await fetchUsers();
    console.log('Outside: ', val)
})()

//----------------------Promise.all-------------------------//

const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye'))
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())

//Promise.all([promise1, promise2, promise3, promise4])
//    .then(values => console.log(values))
