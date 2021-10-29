const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const app = express();

app.use(cors())
const port = 4000;

// my db user 
// user: mhkmcp
// password: 54L35d00FS5GabXF


const uri = "mongodb+srv://mhkmcp:54L35d00FS5GabXF@cluster0.c6kcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   if(!err) {
//       console.log('db connect success');
//   } else {
//       console.log(err);
//   }

//   const tempUser = { name: 'Humayun Kabir', email: 'mhkm05@yahoo.com', phone: '20540506100' }

//   collection.insertOne(tempUser)
//     .then(()=>{
//         console.log('insert success');
//     })

// //   client.close();
// });
app.use(express.json())

async function run() {
    try {
        await client.connect();
        const database = client.db('foodMaster');
        const usersCollection = database.collection('users');

        // const tempUser = { name: 'Humayun Kabir', email: 'mhkm05@yahoo.com', phone: '20540506100' }

        // const user = await usersCollection.insertOne(tempUser);
        // console.log('inserted with id', user.insertedId);

        // POST API 
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.json(result);
        })

        // GET API 
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        })

         // GET API 
         app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await usersCollection.deleteOne(query);
            if(result.deletedCount == 1) {
                res.json(result);    
                console.log('delete success'); 
            } else {
                console.log('delete failed'); 
            }  
        })
        
        // EDIT API 
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await usersCollection.findOne(query);
            res.json(result);

            // if(result.deletedCount == 1) {
            //     res.json(result);    
            //     console.log('delete success'); 
            // } else {
            //     console.log('delete failed'); 
            // }  
        })

        // UPDATE API 
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = await req.body;
            console.log(updatedUser);
            const query = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                },
            };
            const result = await usersCollection.updateOne(query, updateDoc, options)
            res.json(result)
        })


    } finally {
        // await client.close();
    }

}

run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('running....');
})

app.listen(port, ()=> {
    console.log('server running....', port);
})