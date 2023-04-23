const { mongoose } = require('mongoose');
// const Images = require("./ImagesSchema")

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        }
        ,
        password: {
            type: String,
            require: true
        },
        images: {
            type: [],
            require: true
        }

    }
)

const users = new mongoose.model("Users", userSchema)
module.exports = users;