const express = require('express');
const router = express.Router();
const MapModel = require('../../../models/mapModel.js');

const sougou = require('../../../../test/test-examples/sougou-test-map-data.js')

router.post('/', (req, res) => {
    let Map = new MapModel();
    console.log(sougou);
    Map.maps = [sougou];
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