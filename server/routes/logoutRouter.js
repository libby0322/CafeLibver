const logoutCtrl = require("../controllers/logoutCtrl");
const router = require('express').Router();


router.route('/')
    .get(logoutCtrl.getInfo)
   
module.exports = router;