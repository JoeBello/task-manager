import { Entities } from '../../../models'

// TODO: input sanitization
const findById = (entity: Entities, id: string) => `SELECT * FROM "${entity}" WHERE id=${id}`

export default findById
