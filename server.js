const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.port || 8000;

app.use(express.urlencoded({ extended: true }), express.json());

app.use((req, res) => {
  res.json({ message: "Success!" });
});

app.listen(port, () => console.log(`Server live on port: ${port}`));
