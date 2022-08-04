const kakaoCtrl = require("../controllers/kakaoCtrl");
const router = require('express').Router();

router.route('/')
    .get(kakaoCtrl.getInfo)

module.exports = router;