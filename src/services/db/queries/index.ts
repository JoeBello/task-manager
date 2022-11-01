import findById from './findById'
import updateById from './updateById'

const queryMap = new Map()
queryMap.set('find.id', findById)
queryMap.set('update.id', updateById)

const queries = function queries(operation: string, attribute: string) {
	return queryMap.get(`${operation}.${attribute}`)
}

export default queries
