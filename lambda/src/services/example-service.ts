import { getRepository } from 'typeorm-dynamodb'
import { ExampleEntity } from './entities/example-entity'

export class ExampleService {
    async put(record: ExampleEntity) {
        await getRepository(ExampleEntity).put(record)
    }
}