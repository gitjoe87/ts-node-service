import { pinoHttp } from 'pino-http'
import serverless from 'serverless-http'
import express from 'express'
import cors from 'cors'

import * as health from './routes/health'
import * as records from './routes/records'

import { localBucket } from '../scripts/local-bucket'
import { datasourceInitializer } from 'typeorm-dynamodb'
import allEntities from './entities/all-entities'

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
app.use(datasourceInitializer({ entities: allEntities, synchronize: true }))

app.use('/health', health.router)
app.use('/records', records.router)

if (process.env.NODE_ENV === 'local') {
    app.listen(3001, () => console.log('Listening on: 3001'))
    localBucket.create()
        .then(() => {
            console.log('Local bucket created')
        })
        .catch((error: any) => {
            console.error('Failed to initialize local bucket', error)
        })
}

module.exports.handler = serverless(app)