import express from "express"
import  colors from 'colors'
import dotenv from 'dotenv'

//configure env

dotenv.config()



//rest object
const app=express();

//rest api
app.get('/')

//PORT 
const PORT=process.env.PORT;

//listening to the server
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.blue);
})