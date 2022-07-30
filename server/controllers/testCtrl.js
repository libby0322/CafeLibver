const connection = require('../config');

const testCtrl = {
    getInfo: async(req, res)=>{
        console.log('test');
        res.send('test page');
        }
}

module.exports = testCtrl