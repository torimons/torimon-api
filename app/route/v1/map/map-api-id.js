let express = require('express');
let router = express.Router();
let getMapById = require('./get-map-by-id.js');

/**
 * api/v1/mapのルーティングを設定
 * @param {object} router - express.Routerのobject
 * @return {object} router - 引数と同じ，ルーティングを設定して返す
 */
let setRoutingForMapIdApi = (router) => {
    return router.get('/:id', async (req, res) => {
        let mapId = req.params.id;
        mapJson = await getMapById(mapId, res);
        res.json(mapJson);
    })
}

module.exports = setRoutingForMapIdApi(router);
