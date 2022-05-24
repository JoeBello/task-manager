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
		},
		task() {
			return {
				id: 2,
				author: {
					id: 1,
					username: 'derp',
					createdAt: 'string',
					lastModified: 'string'
				},
				createdAt: 'string',
				modifiedAt: 'string',
				title: 'Clean the dishes'
			}
		}
	}
}

export default resolvers
