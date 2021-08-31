const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose_tool");

class HomeController {
    /* [GET] /  */
    home(req, res, next) {
        /** Render page "home" */
        // res.render("home");
        /** Course use callback functions */
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //         res.status(400).json({ error: "ERROR!!" });
        //     }
        // });
        /** Course use promise */
        Course.find({})
            .then((courses) => {
                res.render("home", {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new HomeController();
