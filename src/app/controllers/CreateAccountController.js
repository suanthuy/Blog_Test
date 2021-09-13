class CreateAccountController {
    /** [GET] /create/:slug */
    createUser = (req, res, next) => {
        const _account = req.body.account;
        const _password = req.body.password;
        const _score = req.body.score;

        userModel
            .findOne({ where: { account: _account } })
            .then((user) => {
                if (user) {
                    return res.status(400).json({
                        status: false,
                        message: "Account is existing",
                    });
                }
                return brcypt.hash(_password, 12);
            })
            .then((newPassword) => {
                const _user = new userModel({
                    account: _account,
                    password: newPassword,
                    score: _score,
                });
                return _user.save();
            })
            .then((user) => {
                res.status(200).json({
                    status: true,
                    message: "Creat account succesfully",
                    user: user,
                });
            })
            .catch((err) => res.status(404).json(err));
    };
}

module.exports = new CreateAccountController();
