const express = require("express");
const cors = require("cors");
const db = require("./database/index.js")
require("dotenv").config();

const app = express();

const port = process.env.PORT

app.use(express.json());
app.use(cors());


app.listen(port, async() => {
	await db.connect();
	console.info(`Server is running on port: ${port}`);
});











module.exports = app;