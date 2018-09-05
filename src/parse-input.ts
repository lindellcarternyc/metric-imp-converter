const parseInput = (input: string): { amount: number, unit: string }  => {
  const validUnitRegex = /(gal|lbs|mi|L|km|kg)$/
  const unitMatch = validUnitRegex.exec(input)
  
  let unit: string | undefined

  if ( unitMatch === null ) {
    unit = undefined
  } else {
    unit = unitMatch[0]
  } 

  const amountInput = input.replace(unit || /\D*$/, '')
  const validNumberRegex = /^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/
  
  let amount: number | undefined
  if ( amountInput.length === 0 ) {
    amount = 1
  } else if ( validNumberRegex.test(amountInput) === true ) {
    const [num, den] = amountInput.split('/').map(ipt => parseFloat(ipt))
    if ( den !== undefined ) {
      amount = num / den
    } else {
      amount = num
    }
  } else {
    amount = undefined
  }

  if ( unit === undefined ) {
    if ( amount === undefined ) {
      throw new Error('invalid number and unit')
    }
    throw new Error('invalid unit')
  } else if ( amount === undefined ) {
    throw new Error('invalid number')
  }
  
  return { amount, unit }
}

export default parseInput