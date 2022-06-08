import casual from 'casual'

import { NewUser, User, UserUpdate, NewTask, Task, TaskUpdate } from './model'

interface SkeletonMap {
	User: User
	Task: Task
}

const skeletonMap: SkeletonMap = {
	User: {
		id: '',
		username: '',
		createdAt: '',
		modifiedAt: '',
		tasks: []
	},
	Task: {
		id: '',
		createdAt: '',
		description: '',
		modifiedAt: '',
		title: '',
		user: ''
	}
}

type SkeletonEntity = keyof typeof skeletonMap

const write = function write(table: Array<Task | User>, data: Task | User) {
	table.push(data)
	return data
}

const formatForWrite = function formatForWrite(
	data: NewTask | NewUser,
	entity: SkeletonEntity
): User | Task {
	const skeleton = skeletonMap[entity]
	const timestamp = new Date().toISOString()

	return {
		...skeleton,
		...data,
		id: `${casual.integer()}`,
		createdAt: timestamp,
		modifiedAt: timestamp
	}
}

export const Users: User[] = [
	{
		id: '1',
		username: 'Joe',
		createdAt: new Date().toISOString(),
		modifiedAt: new Date().toISOString(),
		tasks: ['100', '101']
	},
	{
		id: '2',
		username: 'Not Joe',
		createdAt: new Date().toISOString(),
		modifiedAt: new Date().toISOString(),
		tasks: ['200', '201']
	}
]

export const insertUser = function insertUser(user: NewUser): User {
	const existingUser = Users.find((existing) => existing.username === user.username)

	if (existingUser) {
		throw new Error('User already exists')
	}

	const insertUser = formatForWrite({ ...user }, 'User') as User

	write(Users, insertUser)

	return insertUser
}

export const Tasks: Task[] = [
	{
		user: '1',
		createdAt: new Date().toISOString(),
		description: 'Do something',
		id: '100',
		modifiedAt: new Date().toISOString(),
		title: 'One Hundred'
	},
	{
		user: '1',
		createdAt: new Date().toISOString(),
		description: 'Do something else',
		id: '101',
		modifiedAt: new Date().toISOString(),
		title: 'One Hundred and One'
	},
	{
		user: '2',
		createdAt: new Date().toISOString(),
		description: 'Do something new',
		id: '200',
		modifiedAt: new Date().toISOString(),
		title: 'Two Hundred'
	},
	{
		user: '2',
		createdAt: new Date().toISOString(),
		description: 'Do something old',
		id: '201',
		modifiedAt: new Date().toISOString(),
		title: 'Two HUndred and One'
	}
]

export const insertTask = function insertTask(task: NewTask): Task {
	const taskUser = Users.find((user) => user.id === task.user)

	if (!taskUser) {
		throw new Error('Task user does not exist')
	}

	const insertTask = formatForWrite({ ...task }, 'Task') as Task
	const insertUser = {
		...taskUser,
		tasks: [...taskUser.tasks, insertTask.id]
	}

	write(Tasks, insertTask)
	write(Users, insertUser)

	return insertTask
}

const entityMap = {
	Users,
	Tasks
}

type Entity = keyof typeof entityMap

export const destroy = function destroy(entity: Entity, id: string): User | Task {
	console.log('=> Destroy')
	const table = entityMap[entity]
	const index = table.findIndex((existing) => {
		console.log({
			existing,
			id
		})
		return existing.id === id
	})

	const instance = table[index]
	console.log({
		id,
		table,
		index,
		instance
	})

	if (index === -1) {
		throw new Error(`${entity} entry does not exist`)
	}

	return table.splice(index, 1)[0]
}

export const modify = function modify(entity: Entity, update: UserUpdate | TaskUpdate) {
	const table = entityMap[entity]
	const index = table.findIndex((existing) => existing.id === update.id)

	if (index === -1) {
		throw new Error(`${entity} entry does not exist`)
	}

	const modified = { ...table[index], ...update }

	table[index] = modified

	return modified
}
