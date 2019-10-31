let MapModel = require('../../../models/MapModel');

/**
 * mongoDBにアクセスしてマップ一覧を取得する
 * @return {object} maps - マップ一覧を格納したオブジェクト
 */
let getAllMaps = () => {
    return MapModel
        .find()
        .then((maps) => {
            return maps
        });
};

module.exports = getAllMaps;
