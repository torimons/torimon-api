const mongoose = require('mongoose'); //mongoDBに接続するためのライブラリ
const Schema = mongoose.Schema; //mongoDBのスキーマを作る

const SpotSchema = new Schema({
    id: Number,
    name: String,
    location: {
        lat: Number,
        lon: Number
    },
    floor: Number,
    gate_node_ids: [Number],
    parent_spot_ids: [Number],
    detail_map_id: Number,
    others: {}
});

const NodeSchema = new Schema({
    id: Number,
    map_id: Number,
    spot_id: Number,
    location: {
        lat: Number,
        lon: Number
    }
});

const EdgeSchema = new Schema({
    id: Number,
    node_id: {
        a: Number,
        b: Number
    },
    distance: Number
});

const MapSchema = new Schema({
    name: String,
    bounds: {
        top_l: {
            lat: Number,
            lon: Number
        },
        bot_r: {
            lat: Number,
            lon: Number
        }
    },
    spots: [SpotSchema],
    nodes: [NodeSchema],
    edges: [EdgeSchema],
    parent_spot_id: Number
});

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('MapModel', MapSchema);
