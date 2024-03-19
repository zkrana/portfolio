const express = require("express");
const bodyParser = require("body-parser");
const sendEmail = require("./api/send-mail.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Corrected route path
app.post("/app/api/send-email", async (req, res) => {
  try {
    const result = await sendEmail(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
