const Account = require("../models/account.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  getAll: async (req, res) => {
    const accounts = await Account.find();
    res.json(accounts);
  },
  create: async (req, res) => {
    const accountInfo = req.body;
    const potentialAccount = await Account.findOne({
      email: accountInfo.email,
    });

    if (potentialAccount)
      return res.json({
        messages: {
          errors: {
            email: {
              message: "This email already exists.",
            },
          },
        },
      });

    await bcrypt
      .hash(req.body.password, 10)
      .then((hash) => (accountInfo.password = hash));

    await Account.create(accountInfo).then((data) => res.json(data));
  },
};
