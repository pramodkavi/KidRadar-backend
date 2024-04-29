const PreSchoolModel = require("../models/preSchool");

exports.getPreSchools = async (req, res) => {
    try {
        const uid = req.params.uid;
        const preschools = await PreSchoolModel.find({ uid: uid });
        res.status(200).json({ data: preschools });
    } catch (error) {
        console.error("Error fetching preschools:", error);
        res.status(500).json({ error: "Failed to fetch preschools" });
    }
}

exports.createPreSchool = async (req, res) => {
    try {
        const preschoolData = req.body;
        const preschool = new PreSchoolModel(preschoolData);
        const savedPreschool = await preschool.save();
        res.status(201).json({ id: savedPreschool._id });
    } catch (error) {
        console.error("Error saving preschool:", error);
        res.status(500).json({ error: "Failed to save preschool" });
    }
}

exports.updatePreSchool = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedPreschool = await PreSchoolModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updatedPreschool) {
            return res.status(404).json({ error: "Preschool not found" });
        }
        res.status(200).json({ data: updatedPreschool });
    } catch (error) {
        console.error("Error updating preschool:", error);
        res.status(500).json({ error: "Failed to update preschool" });
    }
}

exports.deletePreSchool = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPreschool = await PreSchoolModel.findByIdAndDelete(id);
        if (!deletedPreschool) {
            return res.status(404).json({ error: "Preschool not found" });
        }
        res.status(200).json({ message: "Preschool deleted successfully" });
    } catch (error) {
        console.error("Error deleting preschool:", error);
        res.status(500).json({ error: "Failed to delete preschool" });
    }
}

