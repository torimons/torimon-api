let express  = require('express');
let router   = express.Router();
let MapModel = require('../../models/mapModel.js')

// GET  http://localhost:3000/api/v1/map
router.get('/', function (req, res) {
    MapModel
        .find()
        .then(function (maps){
            res.json(maps);
        });
});

// DBにテストデータを登録する
// POST http://localhost:3000/api/v1/map
router.post('/', function (req, res){
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
    Map.spots =  example.spots;
    Map.nodes =  example.nodes;
    Map.edges =  example.edges;
    Map.parent_spot_id =  example.parent_spot_id;

    // 保存処理
    Map.save(function(err) {
        if (err){
            // エラーがあった場合エラーメッセージを返す
            res.send(err);
        } else {
            // エラーがなければ「Success!!」
            res.json({ message: 'Success!!' });
        }
    });
});

//routerをモジュールとして扱う準備
module.exports = router;
