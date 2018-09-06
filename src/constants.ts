import { Unit } from './types'

// Units
// Volume
const GALLON: Unit = {
  type: 'Imperial',
  shortName: 'gal',
  displayName: 'gallons'
}

const LITERS: Unit = {
  type: 'Imperial',
  shortName: 'L',
  displayName: 'liters'
}

// Weight
const POUNDS: Unit = {
  type: 'Imperial',
  shortName: 'lbs',
  displayName: 'pounds'
}

const KILOGRAMS: Unit = {
  type: 'Metric',
  shortName: 'kg',
  displayName: 'kilograms'
}

// DISTANCE
const MILES: Unit = {
  type: 'Imperial',
  shortName: 'mi',
  displayName: 'miles'
}

const KILOMETERS: Unit = {
  type: 'Metric',
  shortName: 'km',
  displayName: 'kilometers'
}

export const IMPERIAL_UNITS = {
  GALLON,
  POUNDS,
  MILES
}

export const METRIC_UNITS = {
  LITERS, KILOGRAMS, KILOMETERS
}

export const MetricRegEx = /(L|kg|km)$/
export const ImperialRegex = /(gal|lbs|mi)$/