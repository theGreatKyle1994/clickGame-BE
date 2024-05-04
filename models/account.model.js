const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AccountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      minLength: [8, "Username must be at least 8 characters."],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      minLength: [8, "Password must be at least 8 characters."],
      trim: true,
    },
  },
  { timestamps: true }
);

AccountSchema.virtual("cPassword")
  .get(() => this.cPassword)
  .set((value) => (this.cPassword = value));

AccountSchema.pre("validate", function (next) {
  if (this.password !== this.cPassword) {
    this.invalidate("cPassword", "Passwords don't match");
  }
  next();
});

AccountSchema.pre("validate", async function (next) {
  const takenAccount = await Account.find({
    email: this.email,
  });
  if (takenAccount[0]) {
    this.invalidate("email", "Email already taken.");
  }
  next();
});

AccountSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

AccountSchema.post("findOne", async function (result, next) {
  console.log(this.getFilter(), result);
  if (!result) {
    const newErr = new mongoose.Error.ValidationError(this);
    newErr.addError(
      "username",
      new mongoose.Error.ValidatorError({ message: "Username not found." })
    );
    next(newErr);
  }
  next();
});

const Account = mongoose.model("Account", AccountSchema);
module.exports = Account;
