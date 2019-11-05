const express = require('express');
// ルーティングするで
const router = express.Router();

// map用のルーティング
router.use('/map', require('./map/index.js'));

//routerをモジュールとして扱う準備
module.exports = router;
