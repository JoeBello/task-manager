import { Users, Tasks } from './db'

export const User = {
	// create
	// read
	getById: (id: string) => {
		return Users.find((user) => user.id === id)
	},
	getByTaskId: (taskId: string) => {
		return Users.find((user) => user.tasks.includes(taskId))
	}
	// update
	// delete
}

export const Task = {
	// create
	// read
	getById: (id: string) => {
		return Tasks.find((task) => task.id === id)
	},
	getByUserId: (userId: string) => {
		return Tasks.filter((task) => task.user === userId)
	}
	// update
	// delete
}
