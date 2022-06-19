import { ApolloServer } from 'apollo-server'
import { Pool } from 'pg'
import 'dotenv/config'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

const {
	DB_HOST: host,
	DB_NAME: database,
	DB_PASSWORD: password,
	DB_PORT: port,
	DB_USER: user,
	SERVER_PORT
} = process.env

const pool = new Pool({ database, host, password, port: Number(port), user })

pool.on('error', (err) => {
	console.error(`Idle client error: ${err}`)
	process.exit(-1)
})

const context = { pool }

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context
})

server
	.listen(SERVER_PORT)
	.then(({ port }) => console.log(`Server running on ${port}...`))
	.catch((err) => console.error(`Failed to start server: ${err}`))
