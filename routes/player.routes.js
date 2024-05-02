const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
  app.get("/players", PlayerController.getAllPlayers);
};
