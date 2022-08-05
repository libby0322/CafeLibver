const connection = require('../config');

const signupCtrl = {
  
    insertInfo: async(req, res)=>{
      console.log('여긴 signup입니다.');
      console.log(req.query.overlap);


      
        const {id, password, name, age, address} = req.body; // 구조분해할당
        const sql = `INSERT INTO member(id, password, name, age, address) VALUES("${id}", "${password}", "${name}", ${age}," ${address}");`
        // INSERT는 if(!req.body.id){return ...} 리턴을 해줌으로써 오류응답을 서버와 클라이언트에서 2번하지않게해준다.
        switch(true){
          case !req.body.id: return res.send("<script>alert('아이디를 입력해주세요.'); location.href='/signup';</script>");
          case !req.body.password: return res.send("<script>alert('비밀번호를 입력해주세요.'); location.href='/signup';</script>");
          case !req.body.name: return res.send("<script>alert('이름을 입력해주세요.'); location.href='/signup';</script>");
          case !req.body.age: return res.send("<script>alert('난이를 입력해주세요.'); location.href='/signup';</script>");
          case !req.body.address: return res.send("<script>alert('주소를 입력해주세요.'); location.href='/signup';</script>");
      }
        connection.query(sql, (error, rows)=>{
          if(error) throw error;
          res.send("<script>alert('회원가입 완료!!'); location.href='/login';</script>");
        })
    }
  
}

module.exports = signupCtrl