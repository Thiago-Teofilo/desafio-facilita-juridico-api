import { Pool } from 'pg'
import { env } from '@/env'

const createConnection = async () => {
  const client = new Pool({
    connectionString: env.DATABASE_URL,
    ssl: true,
  })

  await client.connect()

  return client
}

export { createConnection }