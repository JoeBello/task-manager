import { Model } from './Model'

export interface TaskData {
	user: string
	createdAt: string
	description: string
	id: string
	modifiedAt: string
	title: string
}

export type TaskEntity = 'Task'

export type NewTask = {
	title: string
	user: string
	description?: string
}

export type UpdateTask = {
	id: string
	title?: string
	user?: string
	description?: string
}

export class Task extends Model {
	protected static entity: TaskEntity = 'Task'
}
