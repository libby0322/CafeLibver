const commentCtrl = require("../controllers/commentCtrl");
const router = require('express').Router();

router.route('/')
    .post(commentCtrl.insertInfo)
    .get(commentCtrl.getInfo)

router.route('/:id') // 2개 넣을때는 '/:id:comment
    .post(commentCtrl.insertInfo)

module.exports = router;