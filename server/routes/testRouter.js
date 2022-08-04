const testCtrl = require("../controllers/testCtrl");
const router = require('express').Router();

router.route('/')
    .get(testCtrl.getInfo)

module.exports = router;