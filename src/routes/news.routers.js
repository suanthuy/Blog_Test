const express = require("express");
const app = express();
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

/** Express 4.x router.use() */
router.use("/:slug", newsController.news_slug);
router.use("/", newsController.news);

module.exports = router;
