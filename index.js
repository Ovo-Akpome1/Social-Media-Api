
//Bringing dependencies into the project
const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const helmet = require ("helmet");
const morgan = require("morgan");
const bcrypt = require ("bcrypt")


//Importing Routes
const userRoute = require('./routes/users');
const authRoute = require ('./routes/auth')

//Using the dependencies 
const app = express();
dotenv.config();


//connecting app to database
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SocialMediaDB'
})
.then(()=>{
    console.log("DB connected succesfyly!")
})
.catch((err)=>{
    console.log(err)
})


//Global Middleware: Whenre we just call the functions 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Using the imported routes
app.use("/api/users", userRoute)
app.use ("/api/auth", authRoute)



//Listening to the server on port 8000
app.listen (8000, () =>{
    console.log("Backend Server is running on Port 8000!")
})