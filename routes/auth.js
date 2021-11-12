const express = require("express");
const router = express.Router();
const Users = require("../models/Users")
const bcrypt = require("bcrypt")

//REGISTER New  User
router.post("/register", async (req, res)=>{

    //Hiding the password using bycrpt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash (req.body.password, salt);
    let user =  new Users({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })

    user = await user.save();
    if(!user){
        return res.status(404).send("Can't add user")
    }else{
        res.send(user)
    }

  
})

//Login User
router.post ("/login", async (req, res )=>{
    let user = await Users.findById(req.params.id);
    if(!user && res.status(404)){
        return res.status (404).send("User not found :(")
    }else{
        res.send(user)
    }
})

router.get("/", (req, res)=>{
    res.send("Authorisation page")
})

module.exports = router;