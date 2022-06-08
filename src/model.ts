import { Tasks, Users, destroy, modify, insertUser, insertTask } from './db'

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

export interface UserUpdate {
	id: string
	username?: string
}

export const User = {
	create: (newUser: NewUser): User => {
		return insertUser(newUser)
	},
	getById: (id: string): User => {
		return Users.find((user) => user.id === id) as User
	},
	getByTaskId: (taskId: string): User => {
		return Users.find((user) => user.tasks.includes(taskId)) as User
	},
	update: (data: UserUpdate): User => {
		return modify('Users', data) as User
	},
	delete: (id: string): User => {
		return destroy('Users', id) as User
	}
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

export interface TaskUpdate {
	id: string
	title?: string
	user?: string
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
	},
	update: (data: TaskUpdate): Task => {
		return modify('Tasks', data) as Task
	},
	delete: (id: string): Task => {
		return destroy('Tasks', id) as Task
	}
}
