import * as express from 'express'

import api from './api'
import hello from './hello'

const app = express()
app.get('/api/convert?:input', api)
app.get('/', hello)

export default app