const connection = require('../config');

const commentCtrl = {
    insertInfo: async(req, res)=>{
        console.log('여기는 insert comment');
        console.log('params: ', req.params.id);
        console.log('query: ', req.query.id);
        if(req.params.id !== undefined){
            // 댓글정보를 불러올때 borde_number와 path가 id와 같은것만 get

            const id = req.params.id;
            const sql = `SELECT * FROM comment WHERE board_number = "${id}";`
            connection.query(sql, (error, rows)=>{
                if(error) throw error;
                res.send(200, {"rows": rows, "length": rows.length});
            })
        }else{
        // 여기는 쿼리스트링으로 parans가 없을 때 실행
        
        console.log('id: ', req.query.id);
        const id = req.query.id;
        const writer = req.cookies.key;
        const {content} = req.body; // 구조분해할당
        console.log('content: ', content);

        switch(true){
            case writer === undefined : res.send("<script>alert('로그인부터 하시죠??'); location.href='/login';</script>"); break;
            case content === '' : res.send("<script>alert('내용을 입력해주세요'); location.href='/membership/faq/view/19';</script>"); break;
            case writer !== undefined && content !== '' :
        
        
        const sql = `INSERT INTO comment(board_number, content, writer) VALUES("${id}", "${content}", "${writer}");`

        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            res.send("<script>location.href='/membership/faq/view/19';</script>");
          }); break;
        }
    }
    },
    getInfo: async(req, res)=>{
        console.log('get info입니다.');
        const id = req.params.id;
        console.log(id);
        const sql = `SELECT * FROM comment;`
        connection.query(sql, (error, rows)=>{
            if(error) throw error;
            res.send(200, {"rows": rows, "length": rows.length});
        })
}
}

module.exports = commentCtrl