class CourseController {
    /** [GET] /course/:slug */
    show(req, res) {
        res.send("COURSE DETAIL!!!");
    }
}

module.exports = new CourseController();
