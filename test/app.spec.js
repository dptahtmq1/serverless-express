const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('/users', () => {
    it('GET / ', async () => {
        const res = await request(app).get('/users');

        expect(res.status).to.equal(200);
        expect(res.text).to.equal('respond with a resource');
    });
});