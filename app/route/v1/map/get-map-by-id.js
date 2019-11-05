const MapModel = require('../../../models/mapModel.js');
const mongoose = require('mongoose');

/**
 * mapIdのマップをmongoDBから取得
 * @param {string} mapId mongoDBの自動で振られたID 
 * @return {object} mapIdのマップ情報
 *     mapIdが有効ならそのマップの情報，mapIdが無効(not found)ならnull
 */
const getMapById = (mapId) => {
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

module.exports = getMapById;
