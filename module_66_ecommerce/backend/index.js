const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

const port = 4000;
const DB_USER="humayun"; 
const DB_PASS="CXqovhweJeL9le89";

// console.log(process.dotenv.DB_USER);


const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.xtfa0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        const database = client.db('ecommerce');
        const productsCollection = database.collection('products');
        const orderCollection = database.collection('orders');

        app.get('/products', async(req, res)=> {
            const cursor = productsCollection.find({});
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);
            // console.log(page, size);
            let products;
            const count = await cursor.count();
            if(page || page === 0) {
                products = await cursor.skip(page*size).limit(size).toArray();
            } else {
                products = await cursor.toArray();
            }
             
            res.send({
                count,
                products
            });
        })

        // use POST to get data by KEYS 
        app.post('/products/cart', async(req, res)=> {
            const keys = req.body;
            // console.log(keys);
            const query = {key: {$in: keys}}
            const products = await productsCollection.find(query).toArray();
            // console.log(query);
            res.json(products);
        })

        app.post('/orders', async(req, res)=>{
            const order = req.body;
            const result = await orderCollection.insertOne(order);

            res.json(result);
    
        })
        


    } finally {
        // await client.close();
    }

}

run().catch(console.dir);


app.listen(port, ()=> {
    console.log('server running... at ', port);
})