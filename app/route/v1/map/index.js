const express = require('express');
// ルーティングするで
const router = express.Router();

// map用のルーティング
router.use('/', require('./map-api-root.js'));
router.use('/', require('./map-api-id.js'));

// 総合学習プラザのテストデータ作成用のルーティング
router.use('/', require('./test-sougou-post.js/index.js'))

//routerをモジュールとして扱う準備
module.exports = router;
