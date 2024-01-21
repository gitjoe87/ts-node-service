import express from 'express'

const router = express.Router()

router.get('/', async (req: any, res: any) => {
    res.status(200).send({ status: 'UP' })
})

export {
    router
}