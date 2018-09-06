import parseInput from '../src/parse-input'

describe('parse-input', () => {
  describe('it recognizes valid units', () => {
    const validUnits = [
      'gal', 'lbs', 'mi',
      'L', 'kg', 'km'
    ]
    
    validUnits.forEach(validUnit => {
      it(`recognizes ${validUnit}`, () => {
        const { unit } = parseInput(validUnit)
        expect(unit.shortName).toBe(validUnit)
      })
    })
  })

  describe('it does not recognize invalid units', () => {
    ['a', 'b', 'c'].forEach(invalidUnit => {
      expect(() => {
        parseInput(invalidUnit)
      }).toThrow('invalid unit')
    })
  })

  describe('it recognizes valid numbers', () => {
    const UNIT = 'mi'

    const tests = [
      {input: '1', output: 1},
      {input: '11', output: 11},
      {input: '111', output: 111},
      {input: '1.2', output: 1.2},
      {input: '11.2', output: 11.2},
      {input: '111.123', output: 111.123},
      {input: '12345.3/235.6', output: 12345.3/235.6},
      {input: '1.2/3', output: 1.2/3}
    ]

    tests.forEach(test => {
      it('recognizes ' + test.input, () => {
        const input = test.input + UNIT
        const { amount } = parseInput(input)
        expect(amount).toEqual(test.output)
      })
    })
  })

  describe('it does not recognize invalid numbers', () => {
    const UNIT = 'L';
    ['a', 'b', 'c', '1.1.1', '1/3/2'].forEach(invalidNumber => {
      expect(() => {
        parseInput(invalidNumber + UNIT)
      }).toThrow('invalid number')
    })
  })

  describe('it recognizes valid inputs', () => {
    const tests = [
      {
        input: '1mi',
        expected: { amount: 1, unit: 'mi'}
      },
      {
        input: '23kg',
        expected: { amount: 23, unit: 'kg'}
      },
      {
        input: 'mi',
        expected: { amount: 1, unit: 'mi'}
      },
      {
        input: '1299829/23992.3L',
        expected: { amount: 1299829/23992.3, unit: 'L'}
      }
    ]

    tests.forEach(({input, expected}) => {
      it(`recognizes ${input}`, () => {
        const parsed = parseInput(input)
        expect(parsed.amount).toEqual(expected.amount)
        expect(parsed.unit.shortName).toEqual(expected.unit)
      })
    })
  })
})