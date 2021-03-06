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
            // enumでStringの値を制限できる
        },
        coordinates: {}
    },
    gate_node_ids: [Number],
    parent_spot_ids: [Number],
    detail_map_ids: [Number],
    detail_map_level_names: [String],
    others: {
        description: String,
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
}, { _id: false});

const MapArraySchema = new Schema({
    maps: [MapSchema]
})

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('MapModel', MapArraySchema);
