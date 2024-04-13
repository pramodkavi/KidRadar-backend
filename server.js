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

  