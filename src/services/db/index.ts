import { Pool } from 'pg'

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

export default pool
