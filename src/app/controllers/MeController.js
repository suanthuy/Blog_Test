const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose_tool");

class MeController {
    /** [GET] /me/stored/courses */
    storedCourses(req, res, next) {
        res.render("me/stored-courses");
    }
}

module.exports = new MeController();
