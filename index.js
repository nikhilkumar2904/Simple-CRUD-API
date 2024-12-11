import express from "express";
import mongoose from "mongoose";
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js'
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api/products",productRoute);



app.get('/', function (req, res) {
  res.send('Hello World Niukhgil');
});


mongoose.connect("mongodb+srv://nk5246:Nk18175478@backenddb.fspud.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{
    console.log("database connected");

    app.listen(port, () =>{
        console.log(`Server running on port: ${port}`);
    });
    
})
.catch(() =>{
    res.send("Error in connection");
});

    
