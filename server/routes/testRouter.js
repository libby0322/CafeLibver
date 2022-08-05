const testCtrl = require("../controllers/testCtrl");
const router = require('express').Router();

router.route('/')
    .post(testCtrl.getInfo)

module.exports = router;