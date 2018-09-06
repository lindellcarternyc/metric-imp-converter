import * as supertest from 'supertest'
import app from '../src/app'
import { APIResponseData } from '../src/types'

const API_ENDPOINT='/api/convert?input='

interface ValidTest {
  input: string
  expected: APIResponseData
}

const ValidTests: ValidTest[] = [
  {
    input: '4gal',
    expected: {
      initNum: 4, initUnit: 'gal',
      returnUnit: 'L', returnNum: 15.14164,
      string: '4 gallons converts to 15.14164 liters'
    }
  }
]

interface InvalidTest {
  input: string
  expected: string
}
const InvalidTests: InvalidTest[] = [
  {
    input: '454',
    expected: 'invalid unit'
  },
  {
    input: 's',
    expected: 'invalid unit'
  },
  {
    input: '@4ert',
    expected: 'invalid number and unit'
  },
  {
    input: '3.3/mi',
    expected: 'invalid number'
  }
]

describe('app', () => {
  ValidTests.forEach(({input, expected}) => {
    it('returns data for valid input: ' + input, (done) => {
      supertest(app)
      .get(API_ENDPOINT + input)
      .expect(200, JSON.stringify(expected))
      .end(err => {
        if ( err ) { throw done(err) }
        done()
      })
    })
  })

  InvalidTests.forEach(({input, expected}) => {
    it('rejects invalid input: ' + input, (done) => {
      supertest(app)
      .get(API_ENDPOINT + input)
      .expect(200, expected)
      .end(err => {
        if ( err ) { throw done(err) }
        done()
      })
    })
  })
})