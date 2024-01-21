import { Column, Entity, PrimaryColumn } from 'typeorm'
import { GlobalSecondaryIndex } from 'typeorm-dynamodb'

@Entity({
    name: 'example-entity',
    schema: 'node-service',
    database: 'local'
})
@GlobalSecondaryIndex({
    name: 'example-index',
    partitionKey: 'exampleColumn',
    sortKey: 'id'
})
export class ExampleEntity {
    @PrimaryColumn({ name: 'id', type: 'varchar' })
    id: string;

    @Column({ name: 'exampleColumn', type: 'varchar' })
    exampleColumn: string;
}