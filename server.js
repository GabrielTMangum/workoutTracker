const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")


const PORT = process.env.PORT || 3000;

const db = require("./models/Workout");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.post('/submit', ({body}, res) => {
    const newWorkout = new Workout(body)
    db.create(newWorkout)
        .then( data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
});

app.get('/list', (req, res) => {
    Workout.find({})
        .then( data => {
            res.json(data)
        })
        .cath( err => {
            res.json(err)
        })
});

app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}/`)
})