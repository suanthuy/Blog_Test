const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose_tool");

class CourseController {
    /** [GET] /course/:slug */
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render("courses/show", {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    /** [GET] /course/create */
    create(req, res, next) {
        res.render("courses/create");
    }
    /** [POST] /course/store */
    store(req, res, next) {
        const formData = req.body;
        formData.thumbnail = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        const newCourse = new Course(req.body);
        newCourse
            .save()
            .then(() => res.redirect("/"))
            .catch((err) => {});
    }
}

module.exports = new CourseController();
