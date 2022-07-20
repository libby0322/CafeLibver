const connection = require('../config');

const topicCtrl = {
    getTopics: async(req, res)=>{
        const id = req.body.id;
        const password = req.body.password;
        const sql = `SELECT * FROM member WHERE id ='${id}'`;
        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            switch(true){
                case id.length === 0:  res.send("<script>alert('아이디를 입력하세요.'); location.href='/login';</script>"); break;
                case password.length === 0:  res.send("<script>alert('비밀번호를 입력하세요.'); location.href='/login';</script>"); break;
                case rows.length !== 0 && password === rows[0].password: res.cookie('key', id); res.redirect("/coffee"); break;
                default:  res.send("<script>alert('아이디 또는 비밀번호가 틀렸습니다.'); location.href='/login';</script>"); break;
            }
        })
    },
    getInfo: async(req, res)=>{
        console.log('어서오세요22');
        const sql = `SELECT * FROM member`;
        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            console.log(rows);
            res.send(rows);
        })
    }
    // insertMovie: async(req, res)=>{
    //     const {id, name, age} = req.body;
    //     const sql = `INSERT INTO member(id, password, name, age, address, picture) VALUES(${id},"${name}",${age});`

    //     connection.query(sql, (error, rows)=>{
    //         if(error) throw error;
    //         res.send(rows);
    //         console.log(rows);
    //     })
    // }
}

module.exports = topicCtrl