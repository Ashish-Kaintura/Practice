const { Router } = require('express')
const router = Router()
const User = require("../models/User")
const { registerUser, getAllUsers, deleteUser, getUserById, logingUser } = require('../controller/UserControler')
const RoleMiddleware = require('../middleware/role')
const { Protect } = require('../middleware/auth')

// router.get("/", async (req, res) => {
//     const users = await User.find()
//     res.status(200).json(users) 
// })

// router.post("/register", async (req, res) => {
//     const { name, email, password, phone } = req.body
//     const user = await User.create({ name, email, password, phone })
//     res.status(201).json({ user, message: "user register successful" })
// })
router.get("/", getAllUsers)
router.get("/:id", getUserById)

router.post("/register", registerUser)
router.post("/login", logingUser)
router.delete("/delete/:id", Protect, RoleMiddleware, deleteUser)
module.exports = router 