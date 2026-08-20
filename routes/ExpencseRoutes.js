const { Router } = require('express')
const router = Router()
const Expenses = require("../models/expense")
const { getExpenses, postExpenses } = require('../controller/ExpensesControler')
const RoleMiddleware = require('../middleware/role')


router.get("/", getExpenses)
router.post("/",  RoleMiddleware, postExpenses,)






module.exports = router