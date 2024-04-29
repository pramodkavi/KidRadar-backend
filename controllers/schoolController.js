const SchoolModel = require("../models/schools");

exports.getSchoolByUid = async (req, res) => {
    try {
        const uid = req.params.uid;
        const school = await SchoolModel.find({ uid: uid });
        res.status(200).json({ data: school });
    }
    catch (error) {
        console.error("Error fetching school:", error);
        res.status(500).json({ error: "Failed to fetch school" });
    }
}

exports.createSchool = async (req, res) => {
    try {
        const schoolData = req.body;
        const school = new SchoolModel(schoolData);
        const savedSchool = await school.save();
        res.status(201).json({ id: savedSchool._id });
    } catch (error) {
        console.error("Error saving school:", error);
        res.status(500).json({ error: "Failed to save school" });
    }
}

exports.updateSchool = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedSchool = await SchoolModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updatedSchool) {
            return res.status(404).json({ error: "School not found" });
        }
        res.status(200).json({ data: updatedSchool });
    }
    catch (error) {
        console.error("Error updating school:", error);
        res.status(500).json({ error: "Failed to update school" });
    }
}

exports.deleteSchool = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedSchool = await SchoolModel.findByIdAndDelete(id);
        if (!deletedSchool) {
            return res.status(404).json({ error: "School not found" });
        }
        res.status(200).json({ message: "School deleted successfully" });
    } catch (error) {
        console.error("Error deleting school:", error);
        res.status(500).json({ error: "Failed to delete school" });
    }
}

