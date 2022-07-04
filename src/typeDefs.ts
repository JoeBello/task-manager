import gql from 'graphql-tag'

const typeDefs = gql`
	type User {
		createdAt: String!
		id: ID!
		modifiedAt: String!
		tasks: [Task]!
		username: String!
	}

	input NewUserInput {
		username: String!
	}

	input UpdateUserInput {
		id: ID!
		username: String
	}

	type Task {
		user: User!
		createdAt: String!
		description: String
		id: ID!
		modifiedAt: String!
		title: String!
	}

	input NewTaskInput {
		description: String
		title: String!
		user: ID!
	}

	input UpdateTaskInput {
		description: String
		id: ID!
		title: String
	}

	type Query {
		user(id: ID!): User!
		task(id: ID!): Task!
	}

	type Mutation {
		newUser(input: NewUserInput!): User!
		updateUser(input: UpdateUserInput!): User!
		deleteUser(id: ID!): User!
		newTask(input: NewTaskInput!): Task!
		updateTask(input: UpdateTaskInput!): Task!
		deleteTask(id: ID!): Task!
	}
`

export default typeDefs
