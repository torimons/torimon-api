let mongoose   = require('mongoose')
let app        = require('./app.js')

// mongoDB接続
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI', { useNewUrlParser: true });
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

//サーバ起動
let port = process.env.PORT || 3000; // port番号を指定
app.listen(port);
console.log('listen on port ' + port);
// エラーの詳細表示
process.on('unhandledRejection', console.dir);
