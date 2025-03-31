"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("dotenv/config");
var cors = require("cors");
var auth_js_1 = require("./Routes/auth.js");
var app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use(express.json());
app.use("/api", auth_js_1.default);
var PORT = 5000;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
