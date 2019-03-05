const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  title: { type: String, required: true },
  from: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
