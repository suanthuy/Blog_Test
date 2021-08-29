class NewsController {
    /* [GET] /news  */
    news(req, res) {
        res.render("news");
    }

    /** [GET] /news/:slug */
    news_slug(req, res) {
        res.send("NEW SLUG!!!");
    }
}

module.exports = new NewsController();
