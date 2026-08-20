const { Router } = require('express')
const router = Router()
const Expences = require("../models/expence")
const { getExpences, postExpences } = require('../controller/ExpencesControler')

const RoleMiddleware = require('../middleware/role')

router.get("/", getExpences)
router.post("/",  RoleMiddleware, postExpences,)






module.exports = router