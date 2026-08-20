// controller /UserControler.js
const jwt = require("jsonwebtoken")
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
const logingUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email, password })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        res.status(200).json({ user, message: "User logged in successfully", token })

    }
    catch (error) {
        res.status(500).json({ message: "Error occurred while logging in" })
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
        const { name, email, role, password, phone, } = req.body
        const user = await User.create({ name, email, role, password, phone, })
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
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ user, message: "user updated successful" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const patchUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ user, message: "user updated successful" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const searchUser = async (req, res) => {
    try {
        const { name } = req.query

        const users = await User.find({
            name: { $regex: name, $options: "i" }
        })

        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    deleteUser, logingUser,
    updateUser,
    patchUser,
    searchUser
}