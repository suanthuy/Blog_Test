class LoginController {
    /** [GET] /course/:slug */
    login(req, res) {
        res.render("login");
    }
}

module.exports = new LoginController();
