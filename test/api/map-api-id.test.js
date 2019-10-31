let request = require('supertest')
let expect = require('expect')
let assert = require('assert')
let express = require('express');

describe('/api/v1/map/:idのテスト', () => {
    // /mapだけのルーティングを用意する
    let router = require('../../app/route/v1/map/map-api-id.js')
    let app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/map', router);

    // test-jsons
    example = require('../test-examples/example.js')

    // mock
    jest.mock('../../app/route/v1/map/get-map-by-id.js')
    let getMapById = require('../../app/route/v1/map/get-map-by-id.js')
    getMapById.mockImplementation((mapId, res) => {
        if (mapId == 'exist_id') {
            return example.singleMap;
        }
        else {
            res.status(204);
            return {}
        }
    })

    test('mapIdが存在しない場合，エラーコード204が帰ってくるはず', (done) => {
        request(app).get('/map/id_that_doesnt_exist').then((response) => {
            expect(response.status).toBe(204);
            done();
        });
    });

    test('mapIdが存在する場合，そのマップの情報が帰ってくるはず', (done) => {
        request(app).get('/map/exist_id').then((response) => {
            expect(response.body).toMatchObject(example.singleMap);
            done();
        });
    });


});