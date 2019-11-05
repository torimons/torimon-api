const MapModel = require('../../../models/mapModel.js');

/**
 * mongoDBにアクセスしてマップ一覧を取得する
 * @return {object} マップ一覧を格納したオブジェクト
 */
const getAllMaps = () => {
    return MapModel
        .find()
        .then((maps) => {
            return maps
        });
};

module.exports = getAllMaps;
