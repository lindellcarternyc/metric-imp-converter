import { IMPERIAL_UNITS, METRIC_UNITS} from './constants'
import { ConverterInput, Unit } from './types'

const convertUnit = (unit: { shortName: string }): Unit => {
  switch ( unit.shortName ) {
    case 'gal': return METRIC_UNITS.LITERS
    case 'L':   return IMPERIAL_UNITS.GALLON
    case 'lbs': return METRIC_UNITS.KILOGRAMS
    case 'kg':  return IMPERIAL_UNITS.POUNDS
    case 'mi':  return METRIC_UNITS.KILOMETERS
    case 'km':  return IMPERIAL_UNITS.MILES
    default:
      throw new Error(`Unrecognized unit: ${unit}`)
  }
}

const convertAmount = (input: ConverterInput): number => {
  switch ( input.unit.shortName ) {
    case 'km': return input.amount * 1.60934
    case 'mi': return input.amount / 1.60934

    case 'L': return input.amount * 3.78541
    case 'gal': return input.amount / 3.78541

    case 'kg': return input.amount * 0.453592
    case 'lbs': return input.amount / 0.453592
    default:
      throw new Error(`Invalid unit: ${input.unit}`)
  }
}

const convert = (input: ConverterInput): ConverterInput => {
  const unit = convertUnit(input.unit)
  const amount = convertAmount({amount: input.amount, unit})
  return { amount, unit }
}

export default convert