import { Context } from './Context'
import { Data, Model } from './Model'
import { UserEntity, NewUser, UserData, UpdateUser } from './User'
import { TaskEntity, NewTask, TaskData, UpdateTask } from './Task'

export type ReturnData = TaskData | UserData
export type MakeData = NewTask | NewUser

export type Entities = TaskEntity | UserEntity

export class PersistenceModel extends Model {
	private entity: Entities | undefined
	protected data: Data
	protected context: Context

	constructor(context: Context, data: Data, entity: Entities) {
		super(context, data)
		this.context = context
		this.data = data
		this.entity = entity
	}

	// static make(context: Context, data: NewUser, entity: string /*Entities*/): ReturnData {
	static make(context: Context, data: MakeData, entity: string /*Entities*/): void {
		console.log('make...')
		console.log({ context, data, entity })
		// return context.pool.connect().then((client: any) => {
		// 	return client
		// 		.query('SELECT $1::text as message', ['Hello Task!'])
		// 		.then((queryResponse: any) => {
		// 			client.release()
		// 			const res = queryResponse.rows[0].message
		// 			console.log({ res })
		// 		})
		// 		.catch((err: any) => {
		// 			client.release()
		// 			console.error({ err })
		// 		})
		// })
	}

	// static findOne(context: Context, id: string, entity: Entities): ReturnData {
	static findOne(context: Context, id: string, entity: Entities): void {
		console.log('findOne...')
		console.log({ context, id, entity })
	}

	// static modify(context: Context, data: Data, entity: Entities): ReturnData {
	static modify(context: Context, data: Data, entity: Entities): void {
		console.log('update...')
		console.log({ context, data, entity })
	}

	// static drop(context: Context, id: string, entity: Entities): ReturnData {
	static drop(context: Context, id: string, entity: Entities): void {
		console.log('delete...')
		console.log({ context, id, entity })
	}
}
