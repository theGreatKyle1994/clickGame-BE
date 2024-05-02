const Account = require("../models/account.model");

module.exports = {
  getAll: async (req, res) => {
    const accounts = await Account.find();
    res.json(accounts);
  },
  create: async (req, res) => {
    await Account.create(req.body)
      .then((data) => {
        return res.json(data);
      })
      .catch(() => {
        return res.sendStatus(400);
      });
  },
};
