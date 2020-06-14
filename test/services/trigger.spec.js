const expect = require('chai').expect;
const nock = require('nock');
const trigger = require('../../services/trigger');

describe('trigger service', () => {
  before('setup mock', () => {
    nock('http://localhost:3000')
      .get('/users')
      .reply(200, 'success');
  });

  it('should trigger /users api', async () => {
    const response = await trigger.trigger(1);
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('success');
  });

  after('tear down',() => {
    nock.cleanAll();
  });
});