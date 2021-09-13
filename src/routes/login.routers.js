const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/LoginController");

/** Express 4.x router.use() */
router.get("/", loginController.login);
router.post("/checkLogin", loginController.checkLogin);

module.exports = router;
