"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var authController_1 = require("../Controllers/authController");
var router = express.Router();
router.post("/login", authController_1.loginUser);
router.post("/signup", authController_1.signupUser);
exports.default = router;
