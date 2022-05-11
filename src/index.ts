import { ApolloServer } from 'apollo-server'
import 'dotenv/config'

import directives from './directives'
import resolvers from './resolvers'
import typeDefs from './schema'

const server = new ApolloServer({
	typeDefs,
	resolvers
	// directives
})

server
	.listen(process.env.PORT)
	.then(({ port }) => console.log(`Server running on ${port}...`))
	.catch((err) => console.log(`Failed to start server: ${err}`))
