const Account = require("../models/account.model");

module.exports = {
  getAll: async (req, res) =>
    await Account.find().then((accounts) => res.json(accounts)),
  create: async (req, res) =>
    await Account.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.json(err)),
};
