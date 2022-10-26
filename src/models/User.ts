import { Context } from './Context'
import { Model } from './Model'

export interface UserData {
	id: string
	username: string
	created: string
	modified: string
}

export type UserEntity = 'user'

export type NewUser = {
	username: string
}

export type UpdateUser = {
	id: string
	username?: string
}

export class User extends Model {
	private static entity: UserEntity = 'user'

	constructor(context: Context, data: Record<string, any>) {
		super(context, data, User.entity)
	}

	// // static create(context: Context, newUser: NewUser): UserData {
	// static create(context: Context, newUser: NewUser): void {
	// 	return User.make(context, newUser, User.entity)
	// }

	static async findById(context: Context, id: string): Promise<UserData> {
		context.conditions = { operation: 'find', attribute: 'id', value: id }
		// TODO: error typing
		const user = await User.find(User.entity, context).catch((err: any) => err)

		if (user instanceof Error) {
			// TODO: handle error
		}

		return user[0]
	}

	// // static update(context: Context, id: string): UserData {
	// static update(context: Context, id: string): void {
	// 	return User.modify(context, { id }, User.entity)
	// }

	// // static delete(context: Context, id: string): UserData {
	// static delete(context: Context, id: string): void {
	// 	return User.drop(context, id, User.entity)
	// }
}
