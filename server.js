require("dotenv").config();
require("./utilities/mongooseConnect");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }), express.json());

app.use((req, res) => {
  res.json({ message: "Success!" });
});

app.listen(PORT, () => console.log(`Server live on port: ${PORT}`));
