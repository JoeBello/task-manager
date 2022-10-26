import { Pool } from 'pg'
import { Entities, FindData } from '../../models'
import queries from './queries'

const {
	DB_HOST: host,
	DB_NAME: database,
	DB_PASSWORD: password,
	DB_PORT: port,
	DB_USER: user
} = process.env

const pool = new Pool({ database, host, password, port: Number(port), user })

pool.on('error', (err) => {
	console.error(`DB connection error: ${err}`)
	process.exit(-1)
})

const query = async function query(
	entity: Entities,
	conditions: Record<string, any>
): Promise<FindData> {
	const { attribute, operation, value } = conditions
	const dbQuery = queries(operation, attribute)

	// TODO: result type
	return pool.query(dbQuery(entity, value)).then((result: any) => result.rows)
}

const db = {
	query
}

export default db
