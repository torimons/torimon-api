let express = require('express');
let router = express.Router();
let MapModel = require('../../../models/mapModel.js')

// GET http://localhost:3000/api/v1/map/:id
// マップ(id指定)の情報を取得
router.get('/:id', (req, res) => {
    let mapId = req.params.id;
    res = getMapById(mapId, res);
})

let getMapById = (mapId, res) => {
    MapModel
        .findById(mapId, (err, map) => {
            try {
                res.json(map);
                res.status(200);
            }
            catch (err) {
                res.status(204); // no content
                res.send(err);
            }
        });
    return res;
}

module.exports = router;