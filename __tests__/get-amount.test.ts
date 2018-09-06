import getAmount from '../src/get-amount'

describe('getAmount', () => {
  const valid = [
    {input: '1', output: 1},
    {input: '11', output: 11},
    {input: '111', output: 111},
    {input: '1.2', output: 1.2},
    {input: '11.2', output: 11.2},
    {input: '111.123', output: 111.123},
    {input: '12345.3/235.6', output: 12345.3/235.6},
    {input: '1.2/3', output: 1.2/3},
    {input: '', output: 1}
  ]
  valid.forEach(({input, output}) => {
    it('parses ' + input, () => {
      const amount = getAmount(input)
      expect(amount).toEqual(output)
    })
  })
})