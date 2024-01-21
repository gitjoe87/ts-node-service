import { Record } from '../entities/record'
import dayjs from 'dayjs'
import { v5 } from 'uuid'

export const recordAdapter = {
    convert (items: any[]) {
        return items.map((item: any) => {
            return recordAdapter.convertOne(item)
        })
    },
    convertOne (item: any) {
        const date = dayjs().format('YYYY-MM-DD')
        const record = new Record()
        record.id = v5(item.name, date)
        record.name = item.name
        record.created = date
        return record
    }
}