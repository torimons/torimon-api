let express = require('express');
// ルーティングするで
let router = express.Router();

// routerにルーティングの動作を書いてく
router.get('/', function(req, res){
    res.status(200);
    res.json({
        message: "Hello, world!"
    });
});

// map用のルーティング
router.use('/map', require('./map.js'));

//routerをモジュールとして扱う準備
module.exports = router;
