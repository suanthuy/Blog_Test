const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

/** Express 4.x router.use() */
router.get("/stored/courses", meController.storedCourses);

module.exports = router;
