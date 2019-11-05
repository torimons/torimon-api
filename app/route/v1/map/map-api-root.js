const express = require('express');
const router = express.Router();
const getAllMaps = require('./get-all-maps.js');

/**
 * /api/v1/map/のルーティングを設定
 * @param {object} router express.Routerのobject 
 * @return {object} 引数と同じ，ルーティングを設定して返す
 */
const setRoutingForMapRootApi = (router) => {
    return router.get('/', async (req, res) => {
        const maps = await getAllMaps();
        res.status(200).json(maps);
    });
};

module.exports = setRoutingForMapRootApi(router);
