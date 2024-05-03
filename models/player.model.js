const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    health: { type: Number, default: 100 },
    money: { type: Number, default: 0 },
    energy: { type: Number, default: 100 },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;
