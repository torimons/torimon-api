let express = require('express');
let router = express.Router();
let MapModel = require('../../../models/mapModel.js')

// GET  http://localhost:3000/api/v1/map
// マップ一覧を取得
router.get('/', (req, res) => {
    console.log('in get/')
    res.status(200);
    res = getAllMaps(res);
});

let getAllMaps = (res) => {
    MapModel
        .find()
        .then((maps) => {
            res.json(maps);
        })
    return res;
}


// DBにテストデータを登録する
// POST http://localhost:3000/api/v1/map
router.post('/', function (req, res) {
    let example = {
        name: 'example-map',
        bounds: {
            top_l: {
                lat: 0,
                lon: 0
            },
            bot_r: {
                lat: 1,
                lon: 1
            }
        },
        spots: [],
        nodes: [],
        edges: [],
        parent_spot_id: 'NULL'
    }

    let Map = new MapModel();

    // テストデータを詰め込む
    Map.name = example.name;
    Map.bounds = example.bounds;
    Map.spots = example.spots;
    Map.nodes = example.nodes;
    Map.edges = example.edges;
    Map.parent_spot_id = example.parent_spot_id;

    // 保存処理
    Map.save(function (err) {
        if (err) {
            // エラーがあった場合エラーメッセージを返す
            res.status(409);
            res.send(err);
        } else {
            // エラーがなければ「Success!!」
            res.status(201);
            res.json({ message: 'Success!!' });
        }
    });
});

module.exports = router