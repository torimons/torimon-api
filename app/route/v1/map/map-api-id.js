const express = require('express');
const router = express.Router();
const getMapById = require('./get-map-by-id.js');

/**
 * /api/v1/map/:idのルーティングを設定
 * @param {object} router express.Routerのobject
 * @return {object} 引数と同じ，ルーティングを設定して返す
 */
const setRoutingForMapIdApi = (router) => {
    return router.get('/:id', async (req, res) => {
        const mapId = req.params.id;
        const mapJson = await getMapById(mapId);
        // DB検索の結果を待ってからステータスコードを設定する
        const status = await (async (mapJson) => {
            if (mapJson === null) {
                return 204; // not found
            }
            else {
                return 200;
            }
        })(mapJson);
        res.status(status).json(mapJson);
    });
};

module.exports = setRoutingForMapIdApi(router);
