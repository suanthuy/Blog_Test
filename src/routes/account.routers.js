var express = require("express");
var router = express.Router();
var controller = require("../controllers/account");
var middleware = require("../middleware/auth");
/* GET users listing. */
// Get All Data of Accounts
router.get(
    "/",
    middleware.authentication,
    middleware.checkAdmin,
    controller.getUsers
);
// Goto page question
router.get(
    "/page",
    middleware.authentication,
    middleware.checkUser,
    controller.page_get
);
// Create new account
router.post(
    "/create",
    middleware.authentication,
    middleware.checkAdmin,
    controller.createUser
);
// Update information of existing account
router.post(
    "/update",
    middleware.authentication,
    middleware.checkAdmin,
    controller.updateUser
);
// Delete existing account
router.get(
    "/delete/:userId",
    middleware.authentication,
    middleware.checkAdmin,
    controller.delUserID
);
// Get All Data of A accounts with userIds
router.get(
    "/:userId",
    middleware.authentication,
    middleware.checkAdmin,
    controller.getUsersByID
);
module.exports = router;
