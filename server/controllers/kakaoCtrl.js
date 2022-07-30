const connection = require('../config');

const kakaoCtrl = {
    getInfo: async(req, res)=>{
        console.log('aaaaaaaaaaaaaaaa');
        console.log(req.query.code);
        res.send('이잉');
        }
}

module.exports = kakaoCtrl