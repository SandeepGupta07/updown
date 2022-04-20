const express = require('express')
const connect = require('./config/database');
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const app = express();

const userController = require("./controller/apiController");
const cors = require("cors");

const port = process.env.PORT || 5000;
connect();

app.use(cors());
app.use(express.json());
app.use("/api/vi", userController);

app.listen(port, () => console.log(`Backend Server Runs on port ${port}!`))