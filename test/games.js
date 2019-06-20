process.env.NODE_ENV = 'test';

const request = require('supertest');
const chai = require('chai');
const app = require('../app');
const db = require('../db');

const { expect } = chai;

describe('GET /games', () => {
  before((done) => {
    db.connect()
      .then(() => done())
      .catch(err => done(err));
  });

  after((done) => {
    db.close()
      .then(() => done())
      .catch(err => done(err));
  });

  it('OK, getting all games', (done) => {
    request(app).get('/games')
      .then(({ body }) => {
        expect(200);
        expect('Content-Type', /json/);
        expect(body).to.be.an('array').that.does.not.include({});
        done();
      })
      .catch(err => done(err));
  });

  it('OK, get one game', (done) => {
    request(app).get('/games/1')
      .then(({ body }) => {
        expect(200);
        expect('Content-Type', /json/);
        expect(body).to.include.property('title');
        done();
      });
  });
});
