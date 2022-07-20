const topicCtrl = require("../controllers/topicCtrl");
const router = require('express').Router();

router.route('/')
    .post(topicCtrl.getTopics)
    .get(topicCtrl.getInfo)

module.exports = router;