const { timeStamp } = require("console");
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username:{
        type:String,
        required:true,
        min: 3,
        max: 20,
        unique: true
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true

    },
    password:{
        type: String,
        required:true,
        min: 3,
        max: 50
    },
    profilePicture:{
        type: String,
        default: ""
    },
    coverPicture:{
        type: String,
        default: ""
    },
    follwers:{
        type: Array,
        default:  []
    },
    follwing:{
        type: Array,
        default:  []
    },
    isAdmin:{
        type: Boolean,
        default:false
    }

}, {timestamps:true})


module.exports = mongoose.model ("Users", UserSchema);