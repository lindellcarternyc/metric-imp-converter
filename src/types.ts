export interface UserInput {
  amount: number
  unit: string
}

export type UnitType = 'Metric' | 'Imperial'

export interface Unit {
  type: UnitType
  shortName: string
  displayName: string
}

export interface ConverterInput {
  amount: number
  unit: Unit
}

export interface APIResponseData {
  initNum: number
  initUnit: string
  returnNum: number
  returnUnit: string
  string: string
}