const mongoose = require('mongoose'); //mongoDBに接続するためのライブラリ
const Schema = mongoose.Schema; //mongoDBのスキーマを作る

const SpotSchema = new Schema({
    id: Number,
    name: String,
    coordinate: {
        lat: Number,
        lng: Number
    },
    floor: Number,
    shape: {
        type: {
            type: String
        },
        coordinates: {}
    },
    gate_node_ids: [Number],
    parent_spot_ids: [Number],
    detail_map_id: Number,
    others: {
        desctiption: String,
        attachment: [
            {
                name: String,
                url: String
            }
        ]
    }
}, { _id: false });

const NodeSchema = new Schema({
    id: Number,
    map_id: Number,
    spot_id: Number,
    coordinate: {
        lat: Number,
        lng: Number
    },
    floor: Number
}, { _id: false });

const EdgeSchema = new Schema({
    id: Number,
    node_id: {
        a: Number,
        b: Number
    },
    distance: Number
}, { _id: false });

const MapSchema = new Schema({
    id: Number,
    name: String,
    bounds: {
        top_l: {
            lat: Number,
            lng: Number
        },
        bot_r: {
            lat: Number,
            lng: Number
        }
    },
    spot: [SpotSchema],
    node: [NodeSchema],
    edge: [EdgeSchema],
    parent_spot_id: Number
});

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('MapModel', MapSchema);
