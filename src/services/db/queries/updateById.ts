import { Entities } from '../../../models'

// TODO: input sanitization
const updateById = function updateById(entity: Entities, { id, ...rest }: Record<string, any>) {
	const query = `UPDATE "${entity}" ${Object.keys(rest).map(
		(key) => `SET ${key}='${rest[key]}'`
	)} WHERE id=${id} RETURNING *`

	return query
}

export default updateById
