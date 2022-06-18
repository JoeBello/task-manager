import { ApolloServer } from 'apollo-server'
import { Client } from 'pg'
import 'dotenv/config'

// import resolvers from './resolvers'
// import typeDefs from './typeDefs'

// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers
// })

// server
// 	.listen(process.env.PORT)
// 	.then(({ port }) => console.log(`Server running on ${port}...`))
// 	.catch((err) => console.log(`Failed to start server: ${err}`))

const {
	DB_HOST: host,
	DB_NAME: database,
	DB_PASSWORD: password,
	DB_PORT: port,
	DB_USER: user
} = process.env

const client = new Client({ database, host, password, port: Number(port), user })

client
	.connect()
	.then(() => console.log('Connected...'))
	.catch((err) => console.log({ err }))

// client
// 	.query('SELECT $1::text as message', ['Hello world!'])
// 	.then((res) => console.log(res.rows[0].message))
// 	.catch((err) => console.log({ err }))

// client
// 	.end()
// 	.then((res) => console.log({ res }))
// 	.catch((err) => console.log({ err }))
