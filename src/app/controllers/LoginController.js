const brcypt = require("bcrypt");

class LoginController {
    /** [GET] /course/:slug */
    login(req, res) {
        res.render("login");
    }
    checkLogin = (req, res, next) => {
        const _account = req.body.account;
        const _password = req.body.password;
        const _score = req.body.score;
        userModel
            .findOne({ where: { account: _account } })
            .then((user) => {
                if (!user) {
                    return res.status(200).json({
                        status: false,
                        message: "Account is not existing in system",
                    });
                }
                return Promise.all([
                    brcypt.compare(_password, user.password),
                    user,
                ]);
            })
            .then((result) => {
                const isMatch = result[0];
                const user = result[1];
                if (!isMatch) {
                    return res.status(200).json({
                        status: false,
                        message: "Password is not correct",
                    });
                }

                const payLoad = {
                    account: user.account,
                };
                return jwt.sign(payLoad, "Users", { expiresIn: 3600 });
            })
            .then((token) => {
                res.status(200).json({
                    status: true,
                    message: "Login successfully",
                    token: token,
                });
                next();
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    };
}

module.exports = new LoginController();
