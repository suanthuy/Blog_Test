var express = require('express');
var router = express.Router();
var controller = require('../controllers/question');
var middleware = require('../middleware/auth');
/* GET users listing. */


router.get('/', controller.getQuestion);
router.post('/update', controller.updateQuestion);

module.exports = router;
