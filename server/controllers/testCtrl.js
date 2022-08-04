const connection = require('../config');

const testCtrl = {
    getInfo: async(req, res)=>{
        res.send('test page');
        }
}

module.exports = testCtrl