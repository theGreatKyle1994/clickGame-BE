const Player = require("../models/player.model");

module.exports = {
  getAllPlayers: async (req, res) => {
    const players = await Player.find();
    res.json(players);
  },
};
