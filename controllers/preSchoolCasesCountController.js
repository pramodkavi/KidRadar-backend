const PreSchoolCasesCount = require("../models/preSchoolCasesCount");

exports.getPreSchoolCasesCount = async (req, res) => {
    try {
        const uid = req.params.uid;
        const CasesCount = await PreSchoolCasesCount.find({ uid: uid });
        res.status(200).json({ data: CasesCount });
    } catch (error) {
        console.error("Error fetching CasesCount :", error);
        res.status(500).json({ error: "Failed to fetch CasesCount " });
    }
}

exports.createPreSchoolCasesCount = async (req, res) => {
    try {
        const childData = req.body;
        const divisionLabel = childData.division.label;

        // Delete all records where division.label matches childData.division.label
        await PreSchoolCasesCount.deleteMany({ "division.label": divisionLabel });

        // Save the childData
        const CasesCount = new PreSchoolCasesCount(childData);
        const savedCount = await CasesCount.save();

        res.status(201).json({ id: savedCount._id });
    } catch (error) {
        console.error("Error saving case count:", error);
        res.status(500).json({ error: "Failed to save case count" });
    }
}

exports.deletePreSchoolCasesCount = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedChild = await ChildCasesModel.findByIdAndDelete(id);
        if (!deletedChild) {
            return res.status(404).json({ error: "Child case not found" });
        }

        res.status(200).json({ message: "Child case deleted successfully" });
    } catch (error) {
        console.error("Error deleting child:", error);
        res.status(500).json({ error: "Failed to delete child case" });
    }
}

exports.updatePreSchoolCasesCount = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedChild = await ChildCasesModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );
        if (!updatedChild) {
            return res.status(404).json({ error: "Child case not found" });
        }

        res.status(200).json({ data: updatedChild });
    } catch (error) {
        console.error("Error updating child:", error);
        res.status(500).json({ error: "Failed to update child" });
    }
}

