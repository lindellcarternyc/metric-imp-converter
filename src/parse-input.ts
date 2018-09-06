import getAmount from './get-amount'
import getUnit from './get-unit'
import { Unit } from './types'

const parseInput = (input: string): { amount: number, unit: Unit }  => {
  const unit = getUnit(input)
  let amount: number | null = null

  if ( unit === null ) {
    amount = getAmount(input)
  } else {
    amount = getAmount(input, unit.shortName)
  }

  if ( unit === null ) {
    if ( amount === null ) { throw new Error('invalid number and unit') }
    throw new Error('invalid unit')
  }
  if ( amount === null ) { throw new Error('invalid number') }

  return { amount, unit }
}

export default parseInput