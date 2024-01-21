import express from 'express'
import { RecordService } from '../services/record-service'
import { recordAdapter } from '../adapters/record-adapter'

const router = express.Router()

router.get('/', async (req: any, res: any, next: any) => {
    try {
       const records = await new RecordService().findAll()
       res.status(200).send(records)
    } catch (error) {
       next(error)
    }
})

router.get('/:id', async (req: any, res: any, next: any) => {
    try {
       const record = await new RecordService().get(req.params.id)
       res.status(200).send(record)
    } catch (error) {
       next(error)
    }
})

router.post('/', async (req: any, res: any, next: any) => {
    try {
       const record = await new RecordService().put(
           recordAdapter.convertOne(req.body)
       )
       res.status(200).send(record)
    } catch (error) {
       next(error)
    }
})

export {
    router
}