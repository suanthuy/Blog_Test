const newsRouter = require("./news.routers");
const sitesRouter = require("./sites.routers");

function route(app) {
    /************************************** */
    /**Write code by functions */
    // app.get("/", (req, res) => {
    //     // res.send("Hello World!"); // send a string not html
    //     // res.send(`<h1>Hello World!!!</h1>`);
    //     res.render("home");
    // });
    // app.get("/news", (req, res) => {
    //     res.render("news");
    // });
    // app.get("/search", (req, res) => {
    //     res.render("search");
    // });
    // app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.render("search");
    // });
    /************************************** */

    app.use("/news", newsRouter);
    app.use("/", sitesRouter);
}

module.exports = route;
