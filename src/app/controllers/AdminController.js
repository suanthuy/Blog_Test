const adminModel = require("../models/admin");
const questionModel = require("./question");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AdminController {
    getUsers = (req, res, next) => {
        adminModel
            .findAll()
            .then((listUser) => {
                res.status(200).json({
                    message: "get all user",
                    listUser: listUser,
                });
            })
            .catch((err) => {
                if (!err.statusCode) {
                    err.statusCode = 500;
                }
                next(err);
            });
    };

    checkLogin = (req, res, next) => {
        const _account = req.body.account;
        const _password = req.body.password;
        adminModel
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
                return jwt.sign(payLoad, "Admin", { expiresIn: 3600 });
            })
            .then((token) => {
                res.status(200).json({
                    status: true,
                    message: "Login successfully",
                    token: token,
                });
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    };

    updateUser = (req, res, next) => {
        const _account = req.body.account;
        const _password = req.body.password;
        const _score = req.body.score;

        adminModel
            .findOne({ where: { account: _account } })
            .then((user) => {
                if (!user) {
                    return res.status(400).json({
                        status: false,
                        message: "Account is not existing in system",
                    });
                }
                return brcypt.hash(_password, 12);
            })
            .then((newPassword) => {
                const _user = new Object({
                    account: _account,
                    password: newPassword,
                    score: _score,
                });
                return adminModel.update(_user, {
                    where: { account: _user.account },
                });
            })
            .then((user) => {
                if (1 == user) {
                    return res.status(201).json({
                        status: true,
                        message: "Update account succesfully",
                        user: user,
                    });
                } else {
                    return res.status(201).json({
                        status: false,
                        message: "Update account Failed",
                        user: user,
                    });
                }
            })
            .catch((err) => res.status(404).json(err));
    };
}

module.exports = new AdminController();
