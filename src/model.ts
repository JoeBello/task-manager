import { insertTask, insertUser, Tasks, Users } from './db'

export interface User {
	id: string
	username: string
	createdAt: string
	modifiedAt: string
	tasks: Array<string>
}

export interface NewUser {
	username: string
}

export const User = {
	create: (newUser: NewUser) => {
		return insertUser(newUser)
	},
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
	createdAt: string
	description: string
	id: string
	modifiedAt: string
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
