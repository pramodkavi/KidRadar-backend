const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const { response } = require("express");
const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://pramodkavindu44:vWrLOcclVv6UPUxX@cluster0.0qraxh3.mongodb.net/kidradar_db?retryWrites=true&w=majority&appName=Cluster0"
const connectionParams={ useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbUrl,connectionParams).then(() => {
    console.log('//////////////Connected to database ')
}).catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
});
const PORT = 8080;
const ChildCasesModel  = require("./models/childCases")
const PreSchoolCasesCount  = require("./models/preSchoolCasesCount")
const PreSchoolCasesModel  = require("./models/preSchoolCases")
const SchoolModel  = require("./models/schools")

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    return res.status(200).send("Hai there");
  });
app.post('/saveChildCases', (req, res) => {
console.log('Received POST request with data:', req.body);
res.status(200).json({ message: 'Data received successfully' });
});

app.get('/childcases/:uid', async (req, res) => {
  try {
    const uid = req.params.uid;
    const childCases = await ChildCasesModel.find({ uid: uid });
    console.log(childCases)
    res.status(200).json({ data: childCases });
  } catch (error) {
    console.error("Error fetching child cases:", error);
    res.status(500).json({ error: "Failed to fetch child cases" });
  }
});


app.post('/childcases', async (req, res) => {
    try {
      const childData = req.body;
      const child = new ChildCasesModel(childData);
      const savedChild = await child.save();
      console.log("Saved child:", savedChild);
      res.status(201).json({ id: savedChild._id });
    } catch (error) {
      console.error("Error saving child:", error);
      res.status(500).json({ error: "Failed to save child" });
    }
  });

  app.delete('/childcases/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deletedChild = await ChildCasesModel.findByIdAndDelete(id);
      if (!deletedChild) {
        return res.status(404).json({ error: "Child case not found" });
      }
      console.log("Deleted child:", deletedChild);
      res.status(200).json({ message: "Child case deleted successfully" });
    } catch (error) {
      console.error("Error deleting child:", error);
      res.status(500).json({ error: "Failed to delete child case" });
    }
  });

  app.put('/childcases/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedChild = await ChildCasesModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedChild) {
        return res.status(404).json({ error: "Child case not found" });
      }
      console.log("Updated child:", updatedChild);
      res.status(200).json({ data: updatedChild });
    } catch (error) {
      console.error("Error updating child:", error);
      res.status(500).json({ error: "Failed to update child" });
    }
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  app.post('/preSchoolCasesCount', async (req, res) => {
    try {
      const childData = req.body;
      const CasesCount = new PreSchoolCasesCount(childData);
      const savedCount = await CasesCount.save();
      console.log("Saved cases Count:", savedCount);
      res.status(201).json({ id: savedCount._id });
    } catch (error) {
      console.error("Error saving case count:", error);
      res.status(500).json({ error: "Failed to save case count" });
    }
  });

  app.delete('/preSchoolCasesCount/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deletedChild = await ChildCasesModel.findByIdAndDelete(id);
      if (!deletedChild) {
        return res.status(404).json({ error: "Child case not found" });
      }
      console.log("Deleted child:", deletedChild);
      res.status(200).json({ message: "Child case deleted successfully" });
    } catch (error) {
      console.error("Error deleting child:", error);
      res.status(500).json({ error: "Failed to delete child case" });
    }
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  app.post('/preSchoolCases', async (req, res) => {
    try {
      const childData = req.body;
      const PreSchoolCases = new PreSchoolCasesModel(childData);
      const savedPreSchoolCases = await PreSchoolCases.save();
      console.log("Saved savedPreSchoolCases:", savedPreSchoolCases);
      res.status(201).json({ id: savedPreSchoolCases._id });
    } catch (error) {
      console.error("Error saving PreSchoolCases:", error);
      res.status(500).json({ error: "Failed to save PreSchoolCases" });
    }
  });

  app.delete('/preSchoolCases/:id', async (req, res) => {
    try {
      const id = req.params.id;
      console.log("Deleting PreSchoolCases", id);
      const deletePreSchoolCases = await PreSchoolCasesModel.findByIdAndDelete(id);
      if (!deletePreSchoolCases) {
        return res.status(404).json({ error: "Child case not found" });
      }
      console.log("Deleted child:", deletePreSchoolCases);
      res.status(200).json({ message: "Child case deleted successfully" });
    } catch (error) {
      console.error("Error deleting child case:", error);
      res.status(500).json({ error: "Failed to delete child case" });
    }
  });

  app.put('/preSchoolCases/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedPreSchoolCase = await PreSchoolCasesModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedPreSchoolCase) {
        return res.status(404).json({ error: "Child case not found" });
      }
      console.log("Updated case:",updatedPreSchoolCase);
      res.status(200).json({ data: updatedPreSchoolCase });
    } catch (error) {
      console.error("Error updating case:", error);
      res.status(500).json({ error: "Failed to update case" });
    }
  });

  app.get('/preSchoolCases/:uid', async (req, res) => {
    try {
      const uid = req.params.uid;
      const PreSchoolCases = await PreSchoolCasesModel.find({ uid: uid });
      console.log(PreSchoolCases)
      res.status(200).json({ data: PreSchoolCases });
    } catch (error) {
      console.error("Error fetching PreSchool cases:", error);
      res.status(500).json({ error: "Failed to fetch PreSchool cases" });
    }
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  app.get('/preschools/:uid', async (req, res) => {
    try {
      const uid = req.params.uid;
      const preschools = await PreSchoolModel.find({ uid: uid });
      res.status(200).json({ data: preschools });
    } catch (error) {
      console.error("Error fetching preschools:", error);
      res.status(500).json({ error: "Failed to fetch preschools" });
    }
  });
  
  // POST a new preschool
  app.post('/preschools', async (req, res) => {
    try {
      const preschoolData = req.body;
      const preschool = new PreSchoolModel(preschoolData);
      const savedPreschool = await preschool.save();
      res.status(201).json({ id: savedPreschool._id });
    } catch (error) {
      console.error("Error saving preschool:", error);
      res.status(500).json({ error: "Failed to save preschool" });
    }
  });
  
  // DELETE a preschool
  app.delete('/preschools/:id', async (req, res) => {
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
  });
  
  // PUT (update) a preschool
  app.put('/preschools/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedPreschool = await PreSchoolModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedPreschool) {
        return res.status(404).json({ error: "Preschool not found" });
      }
      res.status(200).json({ data: updatedPreschool });
    } catch (error) {
      console.error("Error updating preschool:", error);
      res.status(500).json({ error: "Failed to update preschool" });
    }
  });
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  app.get('/schools/:uid', async (req, res) => {
    try {
      const uid = req.params.uid;
      const schools = await SchoolModel.find({ uid: uid });
      res.status(200).json({ data: schools });
    } catch (error) {
      console.error("Error fetching schools:", error);
      res.status(500).json({ error: "Failed to fetch schools" });
    }
  });
  
  // POST a new school
  app.post('/schools', async (req, res) => {
    try {
      const schoolData = req.body;
      const school = new SchoolModel(schoolData);
      const savedSchool = await school.save();
      res.status(201).json({ id: savedSchool._id });
    } catch (error) {
      console.error("Error saving school:", error);
      res.status(500).json({ error: "Failed to save school" });
    }
  });
  
  // DELETE a school
  app.delete('/schools/:id', async (req, res) => {
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
  });
  
  // PUT (update) a school
  app.put('/schools/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedSchool = await SchoolModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedSchool) {
        return res.status(404).json({ error: "School not found" });
      }
      res.status(200).json({ data: updatedSchool });
    } catch (error) {
      console.error("Error updating school:", error);
      res.status(500).json({ error: "Failed to update school" });
    }
  });