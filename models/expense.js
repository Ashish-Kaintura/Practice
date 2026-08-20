const mongoose = require("mongoose")

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: [0.01, "Amount must be greater than 0"]
    },
    category: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true,
        default: "expense"
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Expense", ExpenseSchema)