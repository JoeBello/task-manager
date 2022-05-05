import { ApolloServer } from 'apollo-server'
import 'dotenv/config'

import directives from './src/directives.js'
import resolvers from './src/resolvers.js'
import typeDefs from './src/schema.js'


const server = new ApolloServer({
	typeDefs,
	resolvers,
	directives
})

const { url } = await server.listen(process.env.PORT)
