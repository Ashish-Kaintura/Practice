const FormData = require("../models/form");

const PostData = async (req, res) => {
    try {
        const { name, email, phone, budget, message } = req.body;

        const newform = await FormData.create({
            name,
            email,
            phone,
            budget,
            message
        });

        res.status(201).json({
            message: "New data has been added",
            data: newform
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const getFormData = async (req, res) => {
    try {
        const newform = await FormData.find();

        res.status(200).json({
            message: "Here is the data",
            data: newform
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const getFormDataId = async (req, res) => {
    try {
        const { id } = req.params
        const newform = await FormData.findById(id);

        res.status(200).json({
            message: "Here is the data",
            data: newform
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const DeleteFormData = async (req, res) => {
    try {
        const { id } = req.params
        const newform = await FormData.findByIdAndDelete(id);

        res.status(200).json({
            message: "data is been deleted",
            data: newform
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
const updateFormData = async (req, res) => {
    try {
        const { id } = req.params
        const newform = await FormData.findByIdAndUpdate(
            id, req.body, { new: true }
        );

        res.status(200).json({
            message: "Update sucessfull",
            data: newform
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
module.exports = {
    PostData,
    getFormData,
    getFormDataId,
    DeleteFormData, updateFormData
};
