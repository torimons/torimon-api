let request = require('supertest');
let expect = require('expect');
let assert = require('assert');
let express = require('express');

describe('apiのテスト', () => {
    let app = require('../app/app.js');

    describe('GET /api/v1/map/', () => {
        testJson = require('./test-examples/example.js');
        // getAllMapsのモック 
        getAllMaps = jest.fn(() => {
            return testJson
        })

        test('マップ一覧とstatus200が帰ってくるはず', (done) => {
            request(app).get('/api/v1/map/').expect(200)
                .expect((res) => {
                    expect(res.body).toMatchObject(testJson);
                });
            done();
        })
    })
});
