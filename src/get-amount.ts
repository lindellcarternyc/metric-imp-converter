const validNumberRegex = /^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/

const getAmount = (input: string, unit: string | RegExp = /\D*$/): number | null => { 
  const inputWithoutUnit = input.replace(unit, '')

  if ( inputWithoutUnit.length === 0 ) {
    return 1
  } else if ( validNumberRegex.test(inputWithoutUnit) === true ) {
    const splitInput = inputWithoutUnit.split('/').map(ipt => parseFloat(ipt))
    
    if ( splitInput.length === 2 ) {
      return splitInput[0] / splitInput[1]
    }
    return splitInput[0]
  }

  return null
}

export default getAmount