const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const route = require("./routes");

const app = express();
const port = 3000;

const db = require("./Database");

/* Connect to mongoDB */
db.connect();

/* Express static */
/* Show static file */
app.use(express.static(path.join(__dirname, "public")));

/** To handle (xu ly) the data by Post method */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* HTTP logger */
app.use(morgan("combined"));

/* Template engine */
/* Template engines help to write the code html at another place and shorter */
/* app.engine: using template engine is handlebars */
/* Handlebar help to write code HTML easier */
app.engine(".hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

/**Route init  */
route(app);

/* Layout is a standard structure of website */

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
