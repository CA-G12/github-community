const app = require('../src/app');
const supertest = require('supertest');

test('testing /', (done) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) done(err);
      else done();
    });
});
