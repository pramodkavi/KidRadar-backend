const ChildCasesModel = require("../models/childCases");

exports.getChildCases = async (req, res) => {
    try {
        const uid = req.params.uid;
        const childCases = await ChildCasesModel.find({ uid: uid });

        res.status(200).json({ data: childCases });
    } catch (error) {
        console.error("Error fetching child cases:", error);
        res.status(500).json({ error: "Failed to fetch child cases" });
    }
}

exports.createChildCases = async (req, res) => {
    try {
        const childData = req.body;
        const child = new ChildCasesModel(childData);
        const savedChild = await child.save();

        res.status(201).json({ id: savedChild._id });
    } catch (error) {
        console.error("Error saving child:", error);
        res.status(500).json({ error: "Failed to save child" });
    }
}

exports.deleteChildCases = async (req, res) => {
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

exports.updateChildCases = async (req, res) => {
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


