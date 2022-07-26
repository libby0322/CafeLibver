const noticeCtrl = require("../controllers/noticeCtrl");
const router = require('express').Router();

router.route('/')
    .get(noticeCtrl.getInfo)

module.exports = router;