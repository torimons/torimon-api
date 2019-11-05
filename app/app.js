// ライブラリ読み込み
const express = require('express');
const app = express();

//body-parserの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./route/v1/');
app.use('/api/v1/', router);

// テストようにexportしておく
module.exports = app;
