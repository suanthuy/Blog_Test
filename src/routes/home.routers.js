const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/HomeController");

/** Express 4.x router.use() */
router.get("/", homeController.home);

module.exports = router;
