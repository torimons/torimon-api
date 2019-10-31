let express = require('express');
// ルーティングするで
let router = express.Router();

// map用のルーティング
router.use('/map', require('./map/index.js'));

//routerをモジュールとして扱う準備
module.exports = router;
