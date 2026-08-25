const { Router } = require('express')
const router = Router()
const { GetFormData, PostData, getFormData } = require("../controller/FromControler")


router.get("/", getFormData)
router.post("/", PostData)



module.exports = router 
