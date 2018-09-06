import { IMPERIAL_UNITS, METRIC_UNITS} from '../src/constants'
import convert from '../src/converter'
import { ConverterInput } from '../src/types' 

interface Test {
  input: ConverterInput
  expected: ConverterInput
}

describe('convertAmount', () => {
  const unitTests: Test[] = [
  {
    input: {
      amount: 1,
      unit: IMPERIAL_UNITS.MILES
    },
    expected: {
      amount: 1.60934,
      unit: METRIC_UNITS.KILOMETERS
    }
  }, {
    input: {
      amount: 1,
      unit: IMPERIAL_UNITS.GALLON
    },
    expected: {
      amount: 3.78541,
      unit: METRIC_UNITS.LITERS
    }
  }]

  unitTests.forEach(test => {
    const { input, expected } = test
    it(`converts ${JSON.stringify(input)}`, () => {
      const actual = convert(input)
      expect(actual).toEqual(expected)
    })
  })
})