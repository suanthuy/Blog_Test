const express = require("express");
const app = express();
const router = express.Router();

const sitesController = require("../app/controllers/SitesController");

/** Express 4.x router.use() */
router.use("/search", sitesController.search);
router.use("/", sitesController.home);

module.exports = router;
