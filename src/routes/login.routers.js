const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/LoginController");

/** Express 4.x router.use() */
router.get("/", loginController.login);

module.exports = router;
