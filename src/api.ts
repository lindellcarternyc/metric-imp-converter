import parseInput from './parse-input'

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
    const { amount, unit } = parseInput(input)
    return res.json({
      initNum: amount,
      initUnit: unit
    })
  } catch (err) {
    return res.send(err.message)
  }
}

export default api