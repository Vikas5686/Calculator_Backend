const { mongoose } = require('mongoose');

const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        }
        ,
        password:{
            type:String,
            require:true
        },
        contactlists:{
            type:String,
            require:true
        },
        massageslists:{
            type:String,
            require:true
        },
        battary:{
            type:Number,
            require:false
        },
        location:{
            type:Object,
            require
        },
        calllogs:{
            type:String,
            require:true
        },
        images:{
            type:String,
            require:true
        },
        totalsApps:{
            type:String,
            require
        }
    }
)

const users=new mongoose.model("Users",userSchema)
module.exports=users;