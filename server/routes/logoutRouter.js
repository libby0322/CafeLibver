const router = require('express').Router();

router.get('/', (req, res)=>{
    res.clearCookie('key');
    res.send("<script>alert('로그아웃 완료!!'); location.href='/coffee';</script>");
})
   
module.exports = router;