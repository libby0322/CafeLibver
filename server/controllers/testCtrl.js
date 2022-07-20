const connection = require('../config');

const testCtrl = {
    getInfo: async(req, res)=>{
        console.log('aaaaaaaaaaaaaaaa');
        res.send('test page');
        }
}

module.exports = testCtrl