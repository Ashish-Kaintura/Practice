const Mongoose = require("mongoose");

const FormSchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        phone: {
            type: String
        },
        budget: {
            type: String
        },
        message: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = Mongoose.model("FormData", FormSchema);
