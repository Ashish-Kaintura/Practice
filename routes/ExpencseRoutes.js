const { Router } = require('express')
const router = Router()
const Expenses = require("../models/expense")
const { getExpenses, postExpenses, getExpensesall, getExpenseById, getExpenseSummary } = require('../controller/ExpensesControler')
const RoleMiddleware = require('../middleware/role')
const { Protect } = require('../middleware/auth')

// Ashish kaintura 

router.get("/", Protect, getExpenses);

router.get("/all", Protect, getExpensesall);

router.post("/", Protect, RoleMiddleware, postExpenses);

router.get("/summary", Protect, getExpenseSummary);

router.get("/:id", Protect, getExpenseById);






module.exports = router