import { Context } from './Context'
import { Model } from './Model'

export interface UserData {
	id: string
	username: string
	createdAt: string
	modifiedAt: string
	tasks: Array<string>
}

export type UserEntity = 'User'

export type NewUser = {
	username: string
}

export type UpdateUser = {
	id: string
	username?: string
}

export class User extends Model {
	protected static entity: UserEntity = 'User'

	// // static create(context: Context, newUser: NewUser): UserData {
	// static create(context: Context, newUser: NewUser): void {
	// 	return User.make(context, newUser, User.entity)
	// }

	// // static findById(context: Context, id: string): UserData {
	// static findById(context: Context, id: string): void {
	// 	return User.findOne(context, id, User.entity)
	// }

	// // static update(context: Context, id: string): UserData {
	// static update(context: Context, id: string): void {
	// 	return User.modify(context, { id }, User.entity)
	// }

	// // static delete(context: Context, id: string): UserData {
	// static delete(context: Context, id: string): void {
	// 	return User.drop(context, id, User.entity)
	// }
}
