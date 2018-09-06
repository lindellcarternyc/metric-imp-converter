import * as express from 'express'

import api from './api'

const app = express()
app.get('/api/convert?:input', api)

export default app