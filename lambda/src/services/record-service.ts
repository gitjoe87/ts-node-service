import { getRepository } from 'typeorm-dynamodb'
import { Record } from '../entities/record'

export class RecordService {
    async put (record: Record) {
        await getRepository(Record).put(record)
    }
    async findAll () {
        return await getRepository(Record).findAll()
    }
    async get (id: string) {
        const record = await getRepository(Record).get(id)
        return record
    }
}