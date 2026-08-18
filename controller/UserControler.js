// controller /UserControler.js

const User = require("../models/User")

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
// get userby id
const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body
        const user = await User.create({ name, email, password, phone })
        res.status(201).json({ user, message: "user register successful" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({ user, message: "user deleted successful" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    deleteUser
}