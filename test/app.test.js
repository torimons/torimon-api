const request = require('supertest')
const expect  = require('expect')
const assert  = require('assert')

// app.jsからサーバーのappを読み込んでる
let app = require('../app/app.js').app;

describe('サーバーテスト', () => {

    describe('test for test', () => {
        it('should be just a test', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        })
    })

    describe('GET /', () => {
        it('Hello, worldが帰ってくるはず', (done) => {
            request(app)
                .get('/api/v1/')
                .expect(200)  //Status
                .expect((res) => {
                    expect(res.body).toMatchObject({
                        message: 'Hello, world!'
                    })
                })
                .end(done);
        })
    })

})