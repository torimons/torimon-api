let MapModel = require('../../../models/MapModel');
let mongoose = require('mongoose')

/**
 * mapIdのマップをmongoDBから取得
 * @param {string} mapId - mongoDBの自動で振られたID 
 * @param {object} map - mapIdのマップ情報
 *     mapIdが有効ならそのマップの情報，mapIdが無効(not found)ならnull
 */
let getMapById = (mapId) => {
    return MapModel
        .findById(mapId)
        .then((map) => {
            return map;
        })
        .catch(err => {
            // invalidなmongodbIDを投げると全てキャストエラーになる
            return null;
        });
};

module.exports = getMapById
