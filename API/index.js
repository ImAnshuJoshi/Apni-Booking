const express = require('express');
const dotenv =require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const app = express();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.Mongo ,{
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
        console.log('Connected to mongoDB');
      } catch (error) {
        throw error;
      }
}

mongoose.connection.on("connected",()=>{
    console.log('MongoDB connected');
})

mongoose.connection.on("disconnected",()=>{
  console.log('MongoDB connected');
})

app.listen(8000,()=>{
    connect()
    console.log('Server is running on port 8000');
})