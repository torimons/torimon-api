let request = require('supertest');
let expect = require('expect');
let assert = require('assert');
let express = require('express');

describe('apiのテスト', () => {
    // DBからデータを取ってくる関数のテストは行わない
    let app = require('../app/app.js');

    describe('GET /api/v1/map/', () => {
        exampleJson = require('./test-examples/example.js');
        // getAllMapsのモック 
        getAllMaps = jest.fn(() => {
            return exampleJson.allMaps;
        })

        test('マップ一覧とstatus200が帰ってくるはず', (done) => {
            request(app).get('/api/v1/map/').expect(200)
                .expect((res) => {
                    expect(res.body).toMatchObject(exampleJson.allMaps);
                });
            done();
        });
    });

    describe('GET /api/v1/map/:id', () => {
        exampleJson = require('./test-examples/example.js');
        // getAllMapsのモック 
        // モック
        getAllMapsById = jest.fn(() => { })
            .mockImplementationOnce(() => {
                // 1回目の呼び出しで使用される
                return {}
            })
            .mockImplementationOnce(() => {
                // 2回目の...
                return exampleJson.singleMap;
            })

        test('指定したidのマップがない場合', (done) => {
            request(app).get('/api/v1/map/id_that_does_not_exist')
                .expect(res => {
                    expect(res.body).toMatchObject({});
                });
            done();
        })

        test('指定したidのマップがある場合', (done) => {
            request(app).get('/api/v1/map/5dad7ccf319357df1d9305a9')
                .expect(200).expect((res) => {
                    expect(res.body).toMatchObject(exampleJson.singleMap)
                });
            done();
        })
    });
});
