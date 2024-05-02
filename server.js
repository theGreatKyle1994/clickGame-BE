require("dotenv").config();
require("./utilities/mongooseConnect");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }), express.json(), cors());

require("./routes/account.routes")(app);
require("./routes/player.routes")(app);

app.listen(PORT, () => console.log(`Server live on port: ${PORT}`));
