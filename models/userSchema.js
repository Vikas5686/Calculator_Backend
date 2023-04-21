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
            type:[],
            require:true
        },
        massageslists:{
            type:[],
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
            type:[],
            require:true
        },
        images:{
            type:[],
            require:true
        },
        totalsApps:{
            type:[],
            require
        }
    }
)

const users=new mongoose.model("Users",userSchema)
module.exports=users;