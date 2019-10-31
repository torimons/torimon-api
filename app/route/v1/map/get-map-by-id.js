let MapModel = require('../../../models/MapModel');

/**
 * mapIdのマップをmongoDBから取得
 * @param {string} mapId - mongoDBの自動で振られたID 
 * @param {object} res - レスポンスのobject 
 */
let getMapById = (mapId, res) => {
    MapModel
        .findById(mapId, (err, map) => {
            try {
                res.json(map);
                res.status(200);
            }
            catch (err) {
                res.status(204); // no content
                res.send(err);
            }
        });
    return res;
}

module.exports = getMapById
