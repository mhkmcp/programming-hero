let todo;
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            todo = data;
            console.log('todo: ', todo);

            const h4Elem = document.getElementById('h4id');
            h4Elem.innerText = todo.title;
            console.log('h4Elem.innerText: ', h4Elem.innerText);
        });

}
// response comes as stringified


function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            displayUsers(data);
        })
}



function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

function displayUsers(data) {
    ul = document.getElementById('users');
    for (const user of data) {
        const { name } = user;
        const li = document.createElement('li');
        li.innerText = name;
        ul.appendChild(li);
    }
}
