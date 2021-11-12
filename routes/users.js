const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hey it is User routes")
})

module.exports = router;

