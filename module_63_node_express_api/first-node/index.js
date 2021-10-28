const express = require('express')
var cors = require('cors')

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello People!')
})

const users = [
    {
        id: 1, name: "humayun kabir",  occupation: "Software Engineer"
    },
    
    {
        id: 2, name: "humayun ahmed",  occupation: "Author"
    },
    {
        id: 3, name: "humayun azad",  occupation: "idiot"
    },
    {
        id: 4, name: "humayun kabir",  occupation: "Politician"
    },
    {
        id: 5, name: "humayun rashid",  occupation: "Businessman"
    },
    {
        id: 6, name: "humayun kabir",  occupation: "Professor"
    },
]

app.get('/users', (req, res)=> {
    // console.log(req.query);
    // console.log(req.query.search);

    const search = req.query.search;

    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

// app.METHOD 
app.post('/users', (req, res)=> {
    // console.log('post.....', req.body)
    let newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    // const newUsers = [...users, newUser];
    // res.send(newUsers);
    // console.log(newUsers);
    res.json(newUser);
})


app.get('/users/:id', (req, res)=> {
    let userId = req.params.id
    let theUser = users[userId];

    console.log('id: ', req.params.id);
    res.send(
        theUser
    );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})