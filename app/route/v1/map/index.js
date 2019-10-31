let express = require('express');
// ルーティングするで
let router = express.Router();

// map用のルーティング
router.use('/', require('./map_root.js'));
router.use('/', require('./map_id.js'));

//routerをモジュールとして扱う準備
module.exports = router;
