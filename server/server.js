const express = require('express');
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT;
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');
//body-parser란 req.data 즉 요청한 정보를 눈으로 쉽게 볼 수 있게 해주는 라이브러리, 현재는 express에 빌트인 되었으므로 아래와 같이 사용하면 됨.(express.json(), express().urlencoded() 등)
const mysql = require('mysql2');

let connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
});

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

app.post('/text', (req, res)=>{
    const text = req.body.name;
    console.log(text);
    connection.connect((err)=> {
        if(err) throw err;
        console.log('connected');
        var sql = `INSERT INTO test (hotelName) VALUES ("${text}")`;
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log(result);
            console.log('good! data is saved in db')
        });
    });
    res.send('데이터 저장 성공');
});

app.get('/get/test', (req, res)=>{
    connection.query(`SELECT hotelName FROM test`, (err, rows, fields) =>{
        if(err) throw err;
        console.log(rows);
        res.send(rows);
    })
})


app.listen(port,()=>{
    console.log('listening on'.rainbow + port.rainbow);
});