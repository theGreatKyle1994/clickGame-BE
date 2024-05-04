const AccountController = require("../controllers/account.controller");

module.exports = (app) => {
  app.get("/accounts", AccountController.getAll);
  app.post("/create-account", AccountController.create);
  app.post("/login", AccountController.login);
};
