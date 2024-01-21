import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({
    name: 'record',
    schema: 'node-service',
    database: 'local'
})
export class Record {
    @PrimaryColumn({ name: 'id', type: 'varchar' })
    id: string;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'created', type: 'varchar' })
    created: string;
}