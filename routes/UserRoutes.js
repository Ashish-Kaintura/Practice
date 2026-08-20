const { Router } = require('express')
const router = Router()
const User = require("../models/User")
const { registerUser, getAllUsers, deleteUser, getUserById, logingUser, updateUser, patchUser, searchUser } = require('../controller/UserControler')
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

router.get("/search", searchUser)

router.get("/:id", getUserById)

router.post("/register", registerUser)
router.post("/login", logingUser)

router.delete("/delete/:id", Protect, RoleMiddleware, deleteUser)

router.put("/update/:id", Protect, RoleMiddleware, updateUser)

router.patch("/patch/:id", Protect, RoleMiddleware, patchUser)

module.exports = router 