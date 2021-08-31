const express = require("express");
const router = express.Router();

const sitesController = require("../app/controllers/SitesController");

/** Express 4.x router.use() */
router.get("/search", sitesController.search);
router.get("/", sitesController.home);

module.exports = router;
