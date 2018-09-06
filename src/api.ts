import convert from './converter'
import parseInput from './parse-input'
import { APIResponseData } from './types'

interface APIRequest {
  query: {
    input: string
  }
}

interface ApiResponse {
  json: (data: {}) => void
  send: (message: string) => void
}

const api = (req: APIRequest, res: ApiResponse) => {
  const { input } = req.query
  
  try {
    const initialValue = parseInput(input)
    const returnValue = convert(initialValue)

    const data: APIResponseData = {
      initNum: initialValue.amount,
      initUnit: initialValue.unit.shortName,
      returnUnit: returnValue.unit.shortName,
      returnNum: returnValue.amount,
      string: `${initialValue.amount} ${initialValue.unit.displayName} converts to ${returnValue.amount} ${returnValue.unit.displayName}`
    }
    return res.json(data)
  } catch (err) {
    return res.send(err.message)
  }
}

export default api