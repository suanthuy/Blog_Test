const userModel = require("../models/users");
const questionModel = require("../models/question");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AccountController {
    getUsers = (req, res, next) => {
        userModel
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

    getUsersByID = (req, res, next) => {
        const userId = req.params.userId;
        userModel
            .findByPk(userId)
            .then((user) => {
                if (!user) {
                    res.status(200).json({
                        status: false,
                        message: "Find Faied",
                    });
                } else {
                    res.status(200).json({
                        status: true,
                        message: "Find Succesfull",
                        user: user,
                    });
                }
            })
            .catch((err) => {
                if (!err.statusCode) {
                    err.statusCode = 500;
                }
                next(err);
            });
    };

    delUserID = (req, res, next) => {
        const userId = req.params.userId;
        userModel
            .findByPk(userId)
            .then((user) => {
                if (!user) {
                    res.status(200).json({
                        status: false,
                        message: "Find Faied",
                    });
                } else {
                    userModel
                        .destroy({
                            where: { account: userId },
                        })
                        .then((result) => {
                            res.status(200).json({
                                status: true,
                                message: "Delete Successfully",
                            });
                        });
                }
            })
            .catch((err) => {
                if (!err.statusCode) {
                    err.statusCode = 500;
                }
                next(err);
            });
    };

    updateUser = (req, res, next) => {
        const _account = req.body.account;
        const _password = req.body.password;
        const _score = req.body.score;

        userModel
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
                return userModel.update(_user, {
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

    page_get = (req, res, next) => {
        if (req.data.role == 0) {
            questionModel
                .findAll()
                .then((listQuestion) => {
                    res.render("question", { list: listQuestion });
                })
                .catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        } else {
            userModel
                .findAll()
                .then((listUser) => {
                    res.render("admin", { title: "Admin", list: listUser });
                })
                .catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        }
    };
}

module.exports = new AccountController();

// userModel.findByPk(_account)
//         .then(user => {
//             if (user) {
//                 if (user.password == _password) {
//                     res.status(200).json(
//                         {
//                             status: true,
//                             message: 'Welcome to ' + user.account + ' go on my page',
//                         });
//                 }
//                 else {
//                     res.status(200).json(
//                         {
//                             status: false,
//                             message: 'Password is not correct',
//                         });
//                 }
//             }
//             else {
//                 res.status(200).json({
//                     status: true,
//                     message: 'Login is Failed!!!. Account is not existing',
//                 });
//             }
//         })
//         .catch(err => {
//             if (!err.statusCode) {
//                 err.statusCode = 500;
//             }
//             next(err);
//         });
