// ライブラリ読み込み
let express    = require('express');
let app        = express();

//body-parserの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let port = process.env.PORT || 3000; // port番号を指定

let router = require('./route/v1/');
app.use('/api/v1/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
