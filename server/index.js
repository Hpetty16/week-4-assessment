const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, formSubmitted, putName, deleteName} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune",getFortune);
app.post("/api/formSubmitted", formSubmitted);
app.put("/api/put/name/:id", putName)
app.delete("/api/delete/name/:id", deleteName)


app.listen(4004, () => console.log("Server running on 4004"));
