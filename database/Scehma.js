const mongoose = require("mongoose");
const loginSechema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        number:{
            type:Number,
            require:true,
            unique:true

        },
        password:{
            type:Number,
            require:true
        },
        Cpassword:{
            type:Number,
            require:true
        }
    }
    )
module.exports = mongoose.model("students",loginSechema)