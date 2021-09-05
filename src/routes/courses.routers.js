const express = require("express");
const router = express.Router();

const CourseController = require("../app/controllers/CourseController");

/** Express 4.x router.use() */
router.get("/:slug", CourseController.show);

module.exports = router;
