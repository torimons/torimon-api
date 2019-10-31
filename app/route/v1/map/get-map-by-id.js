let MapModel = require('../../../models/MapModel');

/**
 * mapIdのマップをmongoDBから取得
 * @param {string} mapId - mongoDBの自動で振られたID 
 * @param {object} res - レスポンスのobject(ステータスコード格納用)
 * @param {object} map - mapIdのマップ情報
 */
let getMapById = (mapId, res) => {
    return MapModel
        .findById(mapId)
        .then((map) => {
            return map;
        });
};

module.exports = getMapById
