const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dbUrl ="mongodb+srv://educonnectdevsl:SDvQ3lkpsvjZQdkw@cluster0.p0ymu18.mongodb.net/educonnect_db?retryWrites=true&w=majority&appName=Cluster0"
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.log(
      ".................... Connected to database ...................."
    );
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

const PORT = 8080;
const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

app.get("/", (req, res) => {
    return res.status(200).send("Hai there");
});

app.use("/user", require("./routes/user"));
app.use("/childcases", require("./routes/childCases"));
app.use("/preSchoolCasesCount", require("./routes/preSchoolCasesCount"));
app.use("/preSchoolCases", require("./routes/preSchoolCases"));
app.use("/preSchool", require("./routes/preSchool"));
app.use("/school", require("./routes/school"));
app.use("/institute", require("./routes/institute"));
app.use("/course", require("./routes/course"));


