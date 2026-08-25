const FormData = require("../models/form")

const PostData = async (req, res) => {
    try {
        const { name, email, phone, budget, message } = req.body;
        const newform = await FormData.create({
            name,
            email,
            phone,
            budget,
            message
        })
        res.status(201).json(newform, "new data is been added")

    }
    catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const getFormData = async (req, res) => {
    try {
        const newform = await FormData.find()
        res.status(200).json(newform, "here is the data")
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = ({
    PostData, getFormData
})