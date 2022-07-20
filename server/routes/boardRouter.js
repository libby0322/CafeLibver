const boardCtrl = require("../controllers/boardCtrl");
const router = require('express').Router();

router.route('/')
    .post(boardCtrl.insertInfo)
    .get(boardCtrl.getInfo)

router.route('/:id') // 2개 넣을때는 '/:id:comment
    .get(boardCtrl.getInfo)

module.exports = router;