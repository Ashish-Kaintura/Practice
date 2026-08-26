const { Router } = require('express')
const router = Router()
const { GetFormData, PostData, getFormData, DeleteFormData, getFormDataId, updateFormData } = require("../controller/FromControler")


router.get("/", getFormData)
router.post("/", PostData)
router.delete("/:id", DeleteFormData)
router.put("/:id", updateFormData)
router.get("/:id", getFormDataId)



module.exports = router 
