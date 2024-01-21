import { pinoHttp } from 'pino-http'
import dotenv from 'dotenv'
import serverless from 'serverless-http'
import express from 'express'
import cors from 'cors'


dotenv.config()

const app = express()
app.use(pinoHttp({
    level: 'info',
    redact: ['req.headers']
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
    cors({ origin: true, exposedHeaders: ['Location', 'Content-Disposition'] })
)
app.listen(3001, () => console.log('Listening on: 3001'))

module.exports.handler = serverless(app)