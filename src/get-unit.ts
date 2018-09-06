import { IMPERIAL_UNITS, METRIC_UNITS } from './constants'
import { Unit } from './types'

const getUnit = (input: string): Unit | null => {
  // Imperial Units
  if ( input.endsWith('gal') ) {
    return IMPERIAL_UNITS.GALLON
  } else if ( input.endsWith('lbs') ) {
    return IMPERIAL_UNITS.POUNDS
  } else if ( input.endsWith('mi') ) {
    return IMPERIAL_UNITS.MILES
  }

  // Metric Units
  if ( input.endsWith('L') ) {
    return METRIC_UNITS.LITERS
  } else if ( input.endsWith('kg') ) {
    return METRIC_UNITS.KILOGRAMS
  } else if ( input.endsWith('km') ) {
    return METRIC_UNITS.KILOMETERS
  }

  return null
}

export default getUnit