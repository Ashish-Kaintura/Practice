const jwt = require("jsonwebtoken")
const Expenses = require("../models/expense");
const { default: mongoose } = require("mongoose");


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

const getExpensesall = async (req, res) => {
    try {
        const expenses = await Expenses.find();
        res.status(200).json(expenses)

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// get exp as per user 
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.find({
            owner: req.user.id
        });
        res.status(200).json(expenses)

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
// Get a single expense

const getExpenseById = async (req, res) => {

    try {
        const expense = await Expenses.findOne({
            _id: req.params.id,
            owner: req.user.id
        })

        if (!expense) {
            return res.status(404).json({
                message: "expense not found"
            })
        }

        res.status(200).json(expense)

    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }



}

const updateExpense = async (req, res) => {
    try {
        const expense = await Expenses.findOneAndUpdate(
            {
                _id: req.params.id,
                owner: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({
            expense,
            message: "Expense updated successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const deleteExpense = async (req, res) => {
    try {
        const expense = await Expenses.findOneAndDelete({
            _id: req.params.id,
            owner: req.user.id
        });

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({
            message: "Expense deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const getExpenseSummary = async (req, res) => {
    try {
        const summary = await Expenses.aggregate([
            {
                $match: {
                    owner: new mongoose.Types.ObjectId(req.user.id)
                }
            },
            {
                $group: {
                    _id: "$type",
                    total: {
                        $sum: "$amount"
                    }
                }
            }
        ]);

        res.status(200).json(summary);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    getExpenses,
    getExpensesall,
    postExpenses,
    getExpenseById,
    getExpenseSummary,
    deleteExpense
}