import { Entities } from '../../../models'

// TODO: input sanitization
const findById = function findBYId(entity: Entities, { id }: Record<'id', string>) {
	return `SELECT * FROM "${entity}" WHERE id=${id}`
}

export default findById
