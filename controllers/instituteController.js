const InstituteModel = require("../models/institutes");

exports.getInstituteByUid = async (req, res) => {
    try {
        const uid = req.params.uid;
        const institute = await InstituteModel.find({ uid: uid });
        res.status(200).json({ data: institute });
    }
    catch (error) {
        console.error("Error fetching institute:", error);
        res.status(500).json({ error: "Failed to fetch institute" });
    }
}

exports.createInstitute = async (req, res) => {
    try {
        const instituteData = req.body;
        const institute = new InstituteModel(instituteData);
        const savedInstitute = await institute.save();
        res.status(201).json({ id: savedInstitute._id });
    }
    catch (error) {
        console.error("Error saving institute:", error);
        res.status(500).json({ error: "Failed to save institute" });
    }
}

exports.updateInstitute = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedInstitute = await InstituteModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updatedInstitute) {
            return res.status(404).json({ error: "Institute not found" });
        }
        res.status(200).json({ data: updatedInstitute });
    }
    catch (error) {
        console.error("Error updating institute:", error);
        res.status(500).json({ error: "Failed to update institute" });
    }
}

exports.deleteInstitute = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedInstitute = await InstituteModel.findByIdAndDelete(id);
        if (!deletedInstitute) {
            return res.status(404).json({ error: "Institute not found" });
        }
        res.status(200).json({ message: "Institute deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting institute:", error);
        res.status(500).json({ error: "Failed to delete institute" });
    }
}


