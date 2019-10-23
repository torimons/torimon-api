// ライブラリ読み込み
let express    = require('express');
let app        = express();
let mongoose   = require('mongoose')

// mongoDB接続
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI', { useNewUrlParser: true });
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

//body-parserの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let port = process.env.PORT || 3000; // port番号を指定

let router = require('./route/v1/');
app.use('/api/v1/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
// エラーの詳細表示
process.on('unhandledRejection', console.dir);

// mochaでのテストようにexportしておく
module.exports.app = app;
