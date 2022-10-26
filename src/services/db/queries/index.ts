import findById from './findById'

const queryMap = new Map()
queryMap.set('find.id', findById)

const queries = function queries(operation: string, attribute: string) {
	return queryMap.get(`${operation}.${attribute}`)
}

export default queries
