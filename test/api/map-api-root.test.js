const request = require('supertest');
const expect = require('expect');
const assert = require('assert');
const express = require('express');

describe('/api/v1/map/のテスト', () => {
    // /mapだけのルーティングを用意する
    const router = require('../../app/route/v1/map/map-api-root.js')
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/map', router);

    // test-jsons
    example = require('../test-examples/example.js')

    // mock
    jest.mock('../../app/route/v1/map/get-all-maps.js')
    const getAllMaps = require('../../app/route/v1/map/get-all-maps.js')
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