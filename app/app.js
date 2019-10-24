// ライブラリ読み込み
let express    = require('express');
let app        = express();

//body-parserの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let router = require('./route/v1/');
app.use('/api/v1/', router);

// テストようにexportしておく
module.exports = app;
