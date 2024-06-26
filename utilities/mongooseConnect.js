const mongoose = require("mongoose");
const DBURI = process.env.DBURI;

mongoose
  .connect(DBURI)
  .then(() => console.log("Successfully connected to game asset server."))
  .catch((err) => console.log(err));
