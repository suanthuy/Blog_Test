const express = require("express");
const app = express();
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

/** Express 4.x router.use() */
router.get("/:slug", newsController.news_slug);
router.get("/", newsController.news);

module.exports = router;
