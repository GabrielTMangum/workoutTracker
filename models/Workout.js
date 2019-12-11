const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: String,
  body: String
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;