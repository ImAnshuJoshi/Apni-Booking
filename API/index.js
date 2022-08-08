import express from 'express';
import mongoose from 'mongoose';
import dotenv from'dotenv';
import authRoute from'./routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import usersRoute from './routes/users.js'
import cookieParser from 'cookie-parser';
// const {roomsRoute}= require('./routes/rooms.js');
// const {usersRoute}= require('./routes/users.js');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser())

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


app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelsRoute);
app.use('/api/users',usersRoute);
// app.use('/api/rooms',roomsRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status||400;
  const errorMessage = err.message||"Something went wrong";
  return res.status(errorStatus).send({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
  })
})

app.listen(8000,()=>{
    connect()
    console.log('Server is running on port 8000');
})