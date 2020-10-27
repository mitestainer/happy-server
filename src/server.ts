import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import errorHandler from './errors/handler'
import dotenv from 'dotenv'

dotenv.config()

import './database/connection'

const app = express()

const port = process.env.PORT || 3333

app.use(express.json())
app.use(cors())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))