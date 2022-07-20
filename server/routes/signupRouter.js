const signupCtrl = require("../controllers/signupCtrl");
const router = require('express').Router();

router.route('/')
    .post(signupCtrl.insertInfo)

module.exports = router