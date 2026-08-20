const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        phone: {
            type: String,

        },
        password: {
            type: String,
            required: true
        }
    }

)
module.exports = Mongoose.model("User", UserSchema);