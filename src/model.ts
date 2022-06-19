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
	getById: (id: string, context: Record<string, any>): User => {
		// return Users.find((user) => user.id === id) as User

		return context.pool.connect().then((client: any) => {
			return client
				.query('SELECT $1::text as message', ['Hello User!'])
				.then((queryResponse: any) => {
					client.release()
					const res = queryResponse.rows[0].message
					console.log({ res })
				})
				.catch((err: any) => {
					client.release()
					console.error({ err })
				})
		})
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
	getById: (id: string, context: Record<string, any>) => {
		// return Tasks.find((task) => task.id === id)
		return context.pool.connect().then((client: any) => {
			return client
				.query('SELECT $1::text as message', ['Hello Task!'])
				.then((queryResponse: any) => {
					client.release()
					const res = queryResponse.rows[0].message
					console.log({ res })
				})
				.catch((err: any) => {
					client.release()
					console.error({ err })
				})
		})
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
