import express from 'express'
import { ExampleService } from '../services/example-service'

const router = express.Router()

router.get('/:id', async (req: any, res: any, next: any) => {
    try {
       const record = await new ExampleService().get(req.params.id)
       res.status(200).send(record)
    } catch (error) {
       next(error)
    }
})

export {
    router
}