import { Context, Task, User } from './Models'

const resolvers = {
	Query: {
		user(parent: Record<string, any>, args: Record<string, any>, context: Context) {
			return User.findById(context, args.id)
		}
		// ,
		// task(parent: Record<string, any>, args: Record<string, any>, context: Record<string, any>) {
		// 	return Task.getById(args.id, context)
		// }
	},
	Mutation: {
		newUser(parent: Record<string, any>, args: Record<string, any>, context: Context) {
			return User.create(context, args.input)
		},
		updateUser(parent: Record<string, any>, args: Record<string, any>, context: Context) {
			return User.update(context, args.input)
		},
		deleteUser(parent: Record<string, any>, args: Record<string, any>, context: Context) {
			return User.delete(context, args.id)
		}
		// ,
		// newTask(parent: Record<string, any>, args: Record<string, any>) {
		// 	return Task.create(args.input)
		// },
		// updateTask(parent: Record<string, any>, args: Record<string, any>) {
		// 	return Task.update(args.input)
		// },
		// deleteTask(parent: Record<string, any>, args: Record<string, any>) {
		// 	return Task.delete(args.id)
		// }
	}
	// ,
	// User: {
	// 	tasks(parent: Record<string, any>) {
	// 		return Task.getByUserId(parent.id)
	// 	}
	// },
	// Task: {
	// 	user(parent: Record<string, any>) {
	// 		return User.getByTaskId(parent.id)
	// 	}
	// }
}

export default resolvers
