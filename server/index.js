const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getFun } = require('./controller')
const { getWorkout } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune",getFortune);
app.get("/api/fun",getFun);
app.get("/api/workout",getWorkout);


app.listen(4004, () => console.log("Server running on 4004"));
