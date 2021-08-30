function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            displayUsers(data);
        })
}

function displayUsers(posts) {
    sectionPost = document.getElementById('posts');
    sectionPost.classList.add('posts');
    let count = 0;
    let Row = document.createElement('div');
    let Div = document.createElement('div');
    for (const post of posts) {
        const { title, body } = post;

        const Div = document.createElement('div');
        Div.classList.add('post');
        Div.classList.add('col');
        Div.innerHTML = `
            <h3 class="post-title">${title}</h3>
            <p class="post-body">${body}</p>
        `
        Row.appendChild(Div);
        count += 1;
        if (count === 4) {
            count = 0;
            Row = document.createElement('div');
            sectionPost.appendChild(Row);
        } else {
            Row.classList.add('row');
        }
    }
    Row = document.createElement('div');
    Row.classList.add('row');
    Row.appendChild(Div);
    sectionPost.appendChild(Row);
}

loadPosts();
