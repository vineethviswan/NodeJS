
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Simple CRUD Operations with Node, Express and MongoDB!!!');
});


mongoose.connect("Connection")
    .then(() => {
        console.log('Connected to the Database!');
        app.listen(3000, (req, res) => {
            console.log('Server Running on port 3000!');
        });
    })
    .catch(() => {
        console.log('Connection Failed!');
    });
