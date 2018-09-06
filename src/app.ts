import * as express from 'express'
import { join as joinPath } from 'path'

import api from './api'

// App Constants
const PUBLIC_DIR = joinPath(process.cwd(), 'public')

// Create application
const app = express()

// Mount middleware
app.use(express.static(PUBLIC_DIR))

app.get('/api/convert?:input', api)
app.get('/', (_, res) => {
  res.sendFile(joinPath(PUBLIC_DIR, 'index.html'))
})
export default app