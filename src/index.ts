import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const { SERVER_PORT } = process.env

const context = {}

const server = new ApolloServer({
	context,
	resolvers,
	typeDefs
})

server
	.listen(SERVER_PORT)
	.then(({ port }) => console.log(`Server running on ${port}...`))
	.catch((err) => console.error(`Failed to start server: ${err}`))
