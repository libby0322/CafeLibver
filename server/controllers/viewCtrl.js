const connection = require('../config');

const viewCtrl = {
    getInfo: async(req, res)=>{
        console.log(req.params);
        console.log(req.query);
        console.log('aaaaaaaaaaaaaaaa');
        res.send('aa');
        }
}

module.exports = viewCtrl