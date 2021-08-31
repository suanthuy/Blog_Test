const express = require("express");
const router = express.Router();

const searchController = require("../app/controllers/SearchController");

/** Express 4.x router.use() */
router.get("/", searchController.search);

module.exports = router;
