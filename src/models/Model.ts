import db from '../services/db'
import { Context } from './Context'
import { UserEntity, UserData } from './User'
import { TaskEntity, TaskData } from './Task'

export type Data = Record<string, any>
export type FindData = UserData | TaskData
export type Entities = TaskEntity | UserEntity

export type Conditions = Record<string, any>
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

	static find(entity: Entities, context: Context): Promise<Record<string, any>> {
		const { conditions } = context
		return db.query(entity, conditions)
		// db.read
	}

	static update(context: Context, data: Data) {
		// db.update
	}

	static delete(context: Context, data: Data) {
		// db.delete
	}
}
