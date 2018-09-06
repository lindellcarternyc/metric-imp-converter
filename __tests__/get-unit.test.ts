import { IMPERIAL_UNITS, METRIC_UNITS } from '../src/constants'
import getUnit from '../src/get-unit'
// import { Unit } from '../src/types'

describe('getUnit', () => {
  describe('imperial units', () => {
    const tests = [
      {
        input: 'gal',
        expected: IMPERIAL_UNITS.GALLON
      },
      {
        input: 'lbs',
        expected: IMPERIAL_UNITS.POUNDS
      },
      {
        input: 'mi',
        expected: IMPERIAL_UNITS.MILES
      }
    ]

    tests.forEach(({input, expected}) => {
      it(`recognizes ${input}`, () => {
        const unit = getUnit(input)
        expect(unit).toEqual(expected)
      })
    })
  })

  describe('metric units', () => {
    const tests = [
      {
        input: 'L',
        expected: METRIC_UNITS.LITERS
      },
      {
        input: 'kg',
        expected: METRIC_UNITS.KILOGRAMS
      },
      {
        input: 'km',
        expected: METRIC_UNITS.KILOMETERS
      }
    ]

    tests.forEach(({input, expected}) => {
      const unit = getUnit(input)
      expect(unit).toEqual(expected)
    })
  })
})