// ライブラリ読み込み
var express    = require('express');
var app        = express();

//body-parserの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var port = process.env.PORT || 3000; // port番号を指定

var router = require('./route/v1/');
app.use('/api/v1/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);