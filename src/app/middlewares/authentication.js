const userModel = require("../models/users");
const jwt = require("jsonwebtoken");

class middleWares {
    authentication = (req, res, next) => {
        //const token = req.header('token');
        const token = req.cookies.token;
        if (!token) {
            res.redirect("/");
        }
        jwt.verify(token, "Users", (err, user) => {
            if (err) {
                return res.status(500).json({
                    status: false,
                    message: "You are not permission",
                });
            }
            req.user = user;
            next();
        });
    };

    checkUser = (req, res, next) => {
        var _account = req.user.account;
        userModel
            .findOne({ where: { account: _account } })
            .then((data) => {
                if (data) {
                    if (data.role == 0 || data.role == 1) {
                        req.data = data;
                        next();
                    } else {
                        res.status(404).json({
                            status: false,
                            message: "You are not permission",
                        });
                    }
                } else {
                    res.status(404).json({
                        status: false,
                        message: "You are not permission",
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({
                    status: false,
                    message: err,
                });
            });
    };

    checkAdmin = (req, res, next) => {
        var _account = req.user.account;
        userModel
            .findOne({ where: { account: _account } })
            .then((data) => {
                if (data) {
                    if (data.role == 1) {
                        next();
                    } else {
                        res.status(404).json({
                            status: false,
                            message: "You are not permission",
                        });
                    }
                } else {
                    res.status(404).json({
                        status: false,
                        message: "You are not permission",
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({
                    status: false,
                    message: err,
                });
            });
    };
}

module.exports = new middleWares();
