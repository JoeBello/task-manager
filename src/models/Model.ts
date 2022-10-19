import db from '../services/db'
import { Context } from './Context'
import { UserEntity } from './User'
import { TaskEntity } from './Task'

export type Data = Record<string, any>
export type Entities = TaskEntity | UserEntity
export class Model {
	private db = db
	private entity: Entities | undefined
	protected data: Data
	protected context: Context

	constructor(context: Context, data: Data, entity: Entities) {
		this.context = context
		this.data = data
		this.entity = entity
	}

	static create(context: Context, data: Data) {
		// db.create
	}

	static find(context: Context, data: Data) {
		// db.read
	}

	static update(context: Context, data: Data) {
		// db.update
	}

	static delete(context: Context, data: Data) {
		// db.delete
	}
}
