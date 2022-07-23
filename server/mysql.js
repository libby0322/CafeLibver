const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cafe'
});

// 접속 
connection.connect();

connection.query('SELECT * FROM board', (error, results, fields) => {
// 첫번째 인자는 sql, 두번째 인자는 콜백함수
// 첫번쨰 인자의 sql이 데이터베이스 서버에 응답

    if(error){
        console.log(error);
    }
    console.log(results);

});
connection.end();