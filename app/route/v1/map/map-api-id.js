let express = require('express');
let router = express.Router();
let getMapById = require('./get-map-by-id.js');

/**
 * /api/v1/map/:idのルーティングを設定
 * @param {object} router - express.Routerのobject
 * @return {object} router - 引数と同じ，ルーティングを設定して返す
 */
let setRoutingForMapIdApi = (router) => {
    return router.get('/:id', async (req, res) => {
        let mapId = req.params.id;

        let mapJson = await getMapById(mapId);
        // DB検索の結果を待ってからステータスコードを設定する
        let _status = await (async (mapJson) => {
            if (mapJson === null) {
                return 204; // not found
            }
            else {
                return 200;
            }
        })(mapJson);

        res.status(_status).json(mapJson);
    })
}

module.exports = setRoutingForMapIdApi(router);
