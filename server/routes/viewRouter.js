const viewCtrl = require("../controllers/viewCtrl");
const router = require('express').Router();

router.route('/')
    .get(viewCtrl.getInfo)

router.route('/:id') // 2개 넣을때는 '/:id:comment
    .get(viewCtrl.getInfo)


module.exports = router;