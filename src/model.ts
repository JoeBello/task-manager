import { Users, Tasks, insertTask } from './db'

export interface User {
	id: string
	username: string
	createdAt: Date
	lastModified: Date
	tasks: Array<string>
}

export const User = {
	// create
	getById: (id: string) => {
		return Users.find((user) => user.id === id)
	},
	getByTaskId: (taskId: string) => {
		return Users.find((user) => user.tasks.includes(taskId))
	}
	// update
	// delete
}

export interface Task {
	user: string
	createdAt: Date
	description: string
	id: string
	modifiedAt: Date
	title: string
}

export interface NewTask {
	title: string
	user: string
	description?: string
}

export const Task = {
	create: (newTask: NewTask) => {
		return insertTask(newTask)
	},
	getById: (id: string) => {
		return Tasks.find((task) => task.id === id)
	},
	getByUserId: (userId: string) => {
		return Tasks.filter((task) => task.user === userId)
	}
	// update
	// delete
}
