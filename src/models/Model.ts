import { Context } from './Context'

export type Data = Record<string, any>

export class Model {
	protected data: Data
	protected context: Context

	constructor(context: Context, data: Data) {
		this.data = data
		this.context = context
	}

	// TODO: permissioning
}
