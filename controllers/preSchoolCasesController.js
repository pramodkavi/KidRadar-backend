const PreSchoolCasesModel = require("../models/preSchoolCases");

exports.getPreSchoolCases = async (req, res) => {
    try {
        const uid = req.params.uid;
        const preSchoolCases = await PreSchoolCasesModel.find({ uid: uid });
        res.status(200).json({ data: preSchoolCases });
    } catch (error) {
        console.error("Error fetching preSchool cases:", error);
        res.status(500).json({ error: "Failed to fetch preSchool cases" });
    }
}

exports.createPreSchoolCases = async (req, res) => {
    try {
        const preSchoolData = req.body;
        const preSchoolCases = new PreSchoolCasesModel(preSchoolData);
        const savedPreSchoolCases = await preSchoolCases.save();
        res.status(201).json({ id: savedPreSchoolCases._id });
    } catch (error) {
        console.error("Error saving preSchool cases:", error);
        res.status(500).json({ error: "Failed to save preSchool cases" });
    }
}

exports.updatePreSchoolCases = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedPreSchoolCases = await PreSchoolCasesModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updatedPreSchoolCases) {
            return res.status(404).json({ error: "PreSchool case not found" });
        }
        res.status(200).json({ data: updatedPreSchoolCases });
    } catch (error) {
        console.error("Error updating preSchool cases:", error);
        res.status(500).json({ error: "Failed to update preSchool cases" });
    }
}

exports.deletePreSchoolCases = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPreSchoolCases = await PreSchoolCasesModel.findByIdAndDelete(id);
        if (!deletedPreSchoolCases) {
            return res.status(404).json({ error: "PreSchool case not found" });
        }
        res.status(200).json({ message: "PreSchool case deleted successfully" });
    } catch (error) {
        console.error("Error deleting preSchool cases:", error);
        res.status(500).json({ error: "Failed to delete preSchool cases" });
    }
}
