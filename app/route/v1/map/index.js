const express = require('express');
// ルーティングするで
const router = express.Router();

// map用のルーティング
router.use('/', require('./map-api-root.js'));
router.use('/', require('./map-api-id.js'));
router.use('/', require('./test-post.js'))

//routerをモジュールとして扱う準備
module.exports = router;
