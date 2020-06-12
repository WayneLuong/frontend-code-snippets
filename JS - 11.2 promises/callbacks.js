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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000);
}

//getPosts()
createPost({ title: 'title three', body: 'Description 3' }, getPosts)