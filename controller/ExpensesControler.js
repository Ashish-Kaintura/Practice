const jwt = require("jsonwebtoken")
const Expenses = require("../models/expense")


const postExpenses = async (req, res) => {
    try {
        const { title, amount, date, category, type, description } = req.body;

        const newexpense = await Expenses.create({
            title,
            amount,
            date,
            category,
            type,
            description,
            owner: req.user.id
        });

        res.status(201).json({
            newexpense,
            message: "Expense has been added"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.find()
        res.status(200).json(expenses)

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getExpenses,
    postExpenses
}