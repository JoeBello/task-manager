import { User, Task } from './model'

const resolvers = {
	Query: {
		user(parent: Record<string, any>, args: Record<string, any>) {
			return User.getById(args.id)
		},
		task(parent: Record<string, any>, args: Record<string, any>) {
			return Task.getById(args.id)
		}
	},
	Mutation: {
		newTask(parent: Record<string, any>, args: Record<string, any>) {
			return Task.create(args.input)
		}
	},
	User: {
		tasks(parent: Record<string, any>) {
			return Task.getByUserId(parent.id)
		}
	},
	Task: {
		user(parent: Record<string, any>) {
			return User.getByTaskId(parent.id)
		}
	}
}

export default resolvers
