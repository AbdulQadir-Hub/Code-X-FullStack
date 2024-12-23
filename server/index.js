const express = require("express");
const dotenv = require("dotenv");
const Contact = require("./models/ContactSchema");
dotenv.config({ path: "./config.env" });
require("./db/conn");
const cookie = require("cookie-parser");
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({ extended: false }));

app.post("/message", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const contact = new Contact({
      name: name,
      email: email,
      message: message,
    });
    const details = await contact.save();
    console.log(details);
    res.status(200).send("Data send");
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
});
app.listen(port, () => {
  console.log("Server establish");
});
