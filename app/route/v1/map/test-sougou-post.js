const express = require('express');
const router = express.Router();
const MapModel = require('../../../models/mapModel.js');

const sougou = require('../../../../test/test-examples/sougou-test-map-data.js/index.js')

router.post('/', (req, res) => {
    let Map = new MapModel();
    console.log(sougou);
    Map.id = sougou.id;
    Map.name = sougou.name;
    Map.bounds = sougou.bounds;
    Map.spot = sougou.spot;
    Map.node = sougou.node;
    Map.edge = sougou.edge;
    Map.parent_spot_id = sougou.parent_spot_id;
    console.log(Map);

    Map.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: 'success' });
        }
    });
})

module.exports = router;