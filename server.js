require("dotenv").config();
require("./utilities/mongooseConnect");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }), express.json());

require("./routes/player.routes")(app);

app.listen(PORT, () => console.log(`Server live on port: ${PORT}`));
