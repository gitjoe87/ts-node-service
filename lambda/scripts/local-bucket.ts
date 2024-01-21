import { S3Client, CreateBucketCommand, ListBucketsCommand } from '@aws-sdk/client-s3'

let s3Client: S3Client

const getClient = (region: string, endpoint: string) => {
    if (!s3Client) {
        s3Client = new S3Client({
            region,
            endpoint,
            forcePathStyle: true
        })
    }
    return s3Client
}

export const localBucket = {
    async create () {
        const region = 'us-east-1'
        const endpoint = 'http://localhost:4566'
        const s3 = getClient(region, endpoint)
        const command = new CreateBucketCommand({
            Bucket: 'local-bucket'
        })
        await s3.send(command)
        const buckets = await s3.send(new ListBucketsCommand({}))
        console.log('buckets', buckets)
        process.env.BUCKET_NAME = 'local-buckets'
    }
}
