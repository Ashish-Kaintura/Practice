const jwt = require("jsonwebtoken")
const Expences = require("../models/expence")


const postExpences = async (req, res) => {
    try {
        const { title, amount, date, category, type, description } = req.body;

        const newexpence = await Expences.create({
            title,
            amount,
            date,
            category,
            type,
            description,
            owner: req.user.id
        });

        res.status(201).json({
            newexpence,
            message: "Expense has been added"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const getExpences = async (req, res) => {
    try {
        const expences = await Expences.find()
        res.status(200).json(expences)

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getExpences,
    postExpences
}