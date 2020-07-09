const mongoose = require('mongoose'); //mongoDBに接続するためのライブラリ
const Schema = mongoose.Schema; //mongoDBのスキーマを作る

const SpotSchema = new Schema({
    id: Number,
    name: String,
    coordinate: {
        lat: Number,
        lng: Number
    },
    floorName: String,
    shape: {
        type: {
            type: String
        },
        coordinates: [[[Number]]] | [[[[Number]]]] 
    },
    others: {
        description: String,
        attachment: [
            {
                name: String,
                url: String
            }
        ]
    },
    type: String,
    _shouldDisplayNameOnMap: Boolean,
}, { _id: false });

const MapSchema = new Schema({
    id: Number,
    name: String,
    bounds: {
        topL: {
            lat: Number,
            lng: Number
        },
        botR: {
            lat: Number,
            lng: Number
        }
    },
    floorName: String,
    description: String,
    spots: [SpotSchema],
});

// スキーマの循環参照への対応
SpotSchema.add({detailMaps: [MapSchema]});

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('MapModel', MapSchema);
