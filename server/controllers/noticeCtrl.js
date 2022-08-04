const connection = require('../config');

const noticeCtrl = {
    getInfo: async(req, res)=>{
        const sql = `SELECT * FROM notice`;

        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            res.send(200, {"rows": rows, "length": rows.length});
        })
    }
}

module.exports = noticeCtrl