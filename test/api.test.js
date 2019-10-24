let request = require('supertest');
let expect  = require('expect');
let assert  = require('assert');
let express = require('express');

describe('apiのテスト', () => {
    let app = require('../app/app.js');

    describe('GET /api/v1/', () => {
        test('Hello worldとstatus200が帰ってくるはず', (done) => { 
            request(app).get('/api/v1/').expect(200).expect((res) => {
                expect(res.body).toMatchObject({message: 'Hello, world!'});
            });
            done();
        });
    });

    describe('GET /api/v1/map/', () => {
        testJson = {
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
            _id: "5dad7ccf319357df1d9305a9",
            spots: [],
            nodes: [],
            edges: [],
            parent_spot_id: 'NULL'
        }
        // getAllMapsのモック 
        getAllMaps = jest.fn(() => {
            console.log('hi from mock')
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