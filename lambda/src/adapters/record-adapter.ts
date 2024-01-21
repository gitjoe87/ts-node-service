import { Record } from '../entities/record'
import dayjs from 'dayjs'
import { randomUUID } from 'crypto'

export const recordAdapter = {
    convert (items: any[]) {
        return items.map((item: any) => {
            return recordAdapter.convertOne(item)
        })
    },
    convertOne (item: any) {
        const date = dayjs().format('YYYY-MM-DD')
        const record = new Record()
        record.id = randomUUID()
        record.name = item.name
        record.created = date
        return record
    }
}