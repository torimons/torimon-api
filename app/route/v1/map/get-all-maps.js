let MapModel = require('../../../models/MapModel');

/**
 * mongoDBにアクセスしてマップ一覧を取得する
 * @param {object} res - レスポンスのobject
 * @return {object} res - 結果を格納したレスポンス
 */
let getAllMaps = (res) => {
    MapModel
        .find()
        .then((maps) => {
            res.json(maps);
        })
    return res;
}

module.exports = getAllMaps
