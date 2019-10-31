let express = require('express');
let router = express.Router();
let getAllMaps = require('./get-all-maps.js')

/**
 * /api/v1/map/のルーティングを設定
 * @param {object} router - express.Routerのobject 
 * @return {object} router - 引数を同じ，ルーティングを設定して返す
 */
let setRoutingForMapRootApi = (router) => {
    return router.get('/', (req, res) => {
        console.log('in get/')
        res.status(200);
        res = getAllMaps(res);
    });
}

module.exports = setRoutingForMapRootApi(router);
