let request = require('supertest')
let expect = require('expect')
let assert = require('assert')
let express = require('express');

describe('/api/v1/map/のテスト', () => {
    // /mapだけのルーティングを用意する
    let router = require('../../app/route/v1/map/map-api-root.js')
    let app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/map', router);

    // test-jsons
    example = require('../test-examples/example.js')

    // mock
    jest.mock('../../app/route/v1/map/get-all-maps.js')
    let getAllMaps = require('../../app/route/v1/map/get-all-maps.js')
    getAllMaps.mockImplementation(() => {
        return example.allMaps;
    })

    test('マップ一覧が帰ってくるはず', (done) => {
        request(app).get('/map').then((response) => {
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject(example.allMaps);
            done();
        });
    });
});