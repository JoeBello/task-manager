import gql from 'graphql-tag'

const typeDefs = gql`
	type User {
		id: ID!
		username: String!
		createdAt: String!
		lastModified: String!
	}

	type Query {
		user: User!
	}
`

export default typeDefs
