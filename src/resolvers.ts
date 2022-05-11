const resolvers = {
	Query: {
		// user(obj, args, context, info) {
		user() {
			return {
				id: 1,
				username: 'derp',
				createdAt: 'string',
				lastModified: 'string'
			}
		}
	}
}

export default resolvers
