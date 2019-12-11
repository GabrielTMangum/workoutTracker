const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: String
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
