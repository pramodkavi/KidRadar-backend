const PreSchoolCasesModel = require("../models/preSchoolCases");

exports.getPreSchoolCases = async (req, res) => {
  try {
    const uid = req.params.uid;
    const PreSchoolCases = await PreSchoolCasesModel.find({ uid: uid });

    res.status(200).json({ data: PreSchoolCases });
  } catch (error) {
    console.error("Error fetching PreSchool cases:", error);
    res.status(500).json({ error: "Failed to fetch PreSchool cases" });
  }
}

exports.createPreSchoolCases = async (req, res) => {
  try {
    const childData = req.body;
    const PreSchoolCases = new PreSchoolCasesModel(childData);
    const savedPreSchoolCases = await PreSchoolCases.save();

    res.status(201).json({ id: savedPreSchoolCases._id });
  } catch (error) {
    console.error("Error saving PreSchoolCases:", error);
    res.status(500).json({ error: "Failed to save PreSchoolCases" });
  }
}

exports.updatePreSchoolCases = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedPreSchoolCase = await PreSchoolCasesModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    if (!updatedPreSchoolCase) {
      return res.status(404).json({ error: "Child case not found" });
    }

    res.status(200).json({ data: updatedPreSchoolCase });
  } catch (error) {
    console.error("Error updating case:", error);
    res.status(500).json({ error: "Failed to update case" });
  }
}

exports.deletePreSchoolCases = async (req, res) => {
  try {
    const id = req.params.id;

    const deletePreSchoolCases = await PreSchoolCasesModel.findByIdAndDelete(
      id
    );
    if (!deletePreSchoolCases) {
      return res.status(404).json({ error: "Child case not found" });
    }

    res.status(200).json({ message: "Child case deleted successfully" });
  } catch (error) {
    console.error("Error deleting child case:", error);
    res.status(500).json({ error: "Failed to delete child case" });
  }
}
