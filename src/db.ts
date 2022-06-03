import casual from 'casual'

import { Task, NewTask, User } from './model'

export const Users: User[] = [
	{
		id: '1',
		username: 'Joe',
		createdAt: new Date(),
		lastModified: new Date(),
		tasks: ['100', '101']
	},
	{
		id: '2',
		username: 'Not Joe',
		createdAt: new Date(),
		lastModified: new Date(),
		tasks: ['200', '201']
	}
]

export const Tasks: Task[] = [
	{
		user: '1',
		createdAt: new Date(),
		description: 'Do something',
		id: '100',
		modifiedAt: new Date(),
		title: 'One Hundred'
	},
	{
		user: '1',
		createdAt: new Date(),
		description: 'Do something else',
		id: '101',
		modifiedAt: new Date(),
		title: 'One Hundred and One'
	},
	{
		user: '2',
		createdAt: new Date(),
		description: 'Do something new',
		id: '200',
		modifiedAt: new Date(),
		title: 'Two Hundred'
	},
	{
		user: '2',
		createdAt: new Date(),
		description: 'Do something old',
		id: '201',
		modifiedAt: new Date(),
		title: 'Two HUndred and One'
	}
]

export const insertTask = function insertTask(task: NewTask) {
	const taskUser = Users.find((user) => user.id === task.user)

	if (!taskUser) {
		throw new Error('Task user does not exist!')
	}

	const insertTask = formatForWrite({ ...task }) as Task
	const insertUser = {
		...taskUser,
		tasks: [...taskUser.tasks, insertTask.id]
	}

	write(Tasks, insertTask)
	write(Users, insertUser)

	return insertTask
}

const write = function write(table: Array<Task | User>, data: Task | User) {
	table.push(data)
	return data
}

const formatForWrite = function formatForWrite(data: NewTask) {
	const timestamp = new Date()
	return {
		...data,
		id: `${casual.integer()}`,
		createdAt: timestamp,
		modifiedAt: timestamp
	}
}
