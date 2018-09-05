import * as supertest from 'supertest'
import app from '../src/app'

describe.skip('app', () => {
  it('should pass simple integration test', (done) => {
    supertest(app)
      .get('/')
      .expect(200, 'Hello World!')
      .end((err) => {
        if ( err ) { throw done(err) }
        done()
      })
  })

  it('should return api endpoints', (done) => {
    supertest(app)
    .get('/api/convert?input=4gal')
    .expect(200, '/api')
    .end(err => {
      if ( err) { throw done(err) } 
      done()
    })
  })
})