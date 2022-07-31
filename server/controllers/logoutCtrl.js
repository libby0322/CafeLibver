const connection = require('../config');
const cookie = require('cookie');

const logoutCtrl = {
    getInfo: async(req, res)=>{
        console.log('로그아웃 컨트롤 입니다.');

        if(req.query.kakao !== undefined){
            console.log('kakao');

            // const cookies = cookie.parse(req.headers.cookie);
            // console.log('cookies: ', cookies); // cookie 모듈을 통해 헤더를 파싱한 결과 출력
            // res.clearCookie('webid');
            res.send("<script>alert('로그아웃 완료!!'); location.href='/coffee';</script>");
            
        }else{
            console.log('로그아웃');

            console.log(req.cookies.key);

            var visitors = req.cookies;
            console.log(visitors);

            // console.log('cookies: ', res.cookie()); // 엄청많이뜸
            // console.log(res.cookie('key',{path: '/'})); // 엄청많이뜸

            const cookies = cookie.parse(req.headers.cookie);
            console.log(cookies); // cookie 모듈을 통해 헤더를 파싱한 결과 출력
            // res.clearCookie('key');
            // res.send("<script>alert('로그아웃 완료!!'); location.href='/coffee';</script>");
        }
        
    }
}

module.exports = logoutCtrl