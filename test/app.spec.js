const expect = require('chai').expect;
const request = require('supertest');
const sinon = require('sinon');

const auth = require('../middlewares/auth');

describe('/users', () => {
  it('GET / ', async () => {
    // Given
    sinon.stub(auth, 'authenticate').callsFake((req, res, next) => next());
    const app = requireUncached('../app');

    // When
    const res = await request(app).get('/users');

    // Then
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('respond with a resource');
  });

  it('GET / throws 401 when auth token is invalid', async () => {
    // Given
    const app = requireUncached('../app');

    // When
    const res = await request(app).get('/users');

    // Then
    expect(res.status).to.equal(401);
  });

  afterEach(() => {
    sinon.restore();
  });
});

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}