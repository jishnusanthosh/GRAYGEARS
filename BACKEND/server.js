import express from "express"
import  colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from "./config/DataBase.js"

//configure env
dotenv.config()

//databse config

connectDB();

//rest object
const app=express();

//middlewares
app.use(express.json());
app.use(morgan('dev'))

//rest api
app.get('/')

//PORT 
const PORT=process.env.PORT;

//listening to the server
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.blue);
})