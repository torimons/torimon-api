const MapModel = require('../../../models/mapModel.js');
const express = require('express');
const router = express.Router();

/**
 * 新しいマップを登録する
 */
const postMap = (req, res) => {
    console.log(req);
    const Map = new MapModel();
    // データの埋め込み
    Map.id = req.body.id;
    Map.name = req.body.name;
    Map.description = req.body.description;
    Map.bounds = req.body.bounds;
    Map.floorName = req.body.floorName;
    Map.spots = req.body.spots;
    // 保存
    Map.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({message: 'post success'});
        }
    });
}

/**
 * /api/v1/mapsへのPOSTのルーティング設定
 */
const setRoutingForMapPostApi = (router) => {
    return router.post('/', async (req, res) => {
        postMap(req, res);
        res.status(200);
    })
}

module.exports = setRoutingForMapPostApi(router);