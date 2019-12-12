const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  workoutTitle: String,
  exercises: String
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;