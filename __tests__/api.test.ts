import api from '../src/api'
import { APIResponseData } from '../src/types' 

interface Test {
  input: string,
  expected: APIResponseData
}

let json: jest.Mock
let send: jest.Mock
let status: jest.Mock
let res: { json: jest.Mock, send: jest.Mock, status: jest.Mock }

beforeEach(() => {
  json = jest.fn()
  send = jest.fn()
  status = jest.fn()
  res = { json, send, status }
})

describe('api', () => {
  const invalidUnitInputs = [
    '12f', '23gff', '900/67.3fs.'
  ]
  invalidUnitInputs.forEach(invalidInput => {
    it('returns `invalid unit` for ' + invalidInput, () => {
      api({query: { input: invalidInput}}, res)
      expect(send.mock.calls).toHaveLength(1)
      expect(send.mock.calls[0][0]).toEqual('invalid unit')
    })
  })

  const invalidNumberInputs = [
    'xkg', '@L', '9()mi'
  ]

  invalidNumberInputs.forEach(invalidInput => {
    it('rejects ' + invalidInput, () => {
      api({query: {input: invalidInput}}, res)
      expect(send.mock.calls).toHaveLength(1)
      expect(send.mock.calls[0][0]).toBe('invalid number')
    })
  })

  const completelyInvalidInputs = [
    'x9093', '.3kasdfkwer', '@34s'
  ]
  completelyInvalidInputs.forEach(invalidInput => {
    it('rejects ' + invalidInput, () => {
      api({query: {input: invalidInput} }, res)
      expect(send.mock.calls).toHaveLength(1)
      expect(send.mock.calls[0][0]).toBe('invalid number and unit')
    })
  })

  const validTests: Test[] = [{
    input: '12L',
    expected: {
      initNum: 12,
      initUnit: 'L',
      returnUnit: 'gal',
      returnNum: 12 / 3.78541,
      string: `12 liters converts to ${12 / 3.78541} gallons`
    }
  }, {
    input: '123/8.4mi',
    expected: {
      initNum: 123/8.4,
      initUnit: 'mi',
      returnUnit: 'km',
      returnNum: 123/8.4*1.60934,
      string: `${123/8.4} miles converts to ${123/8.4*1.60934} kilometers`
    }
  }]

  validTests.forEach(test => {
    it('converts ' + test.input, () => {
      api({query: {input: test.input}}, res)
      expect(json.mock.calls).toHaveLength(1)
      
      const result = json.mock.calls[0][0]
      expect(result).toEqual(test.expected)
    })
  })
})