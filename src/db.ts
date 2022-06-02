export const Users = [
	{
		id: '1',
		username: 'Joe',
		createdAt: new Date(),
		lastModified: new Date(),
		tasks: ['100', '101']
	},
	{
		id: '2',
		username: 'Not Joe',
		createdAt: new Date(),
		lastModified: new Date(),
		tasks: ['200', '201']
	}
]

export const Tasks = [
	{
		user: '1',
		createdAt: new Date(),
		description: 'Do something',
		id: '100',
		modifiedAt: new Date(),
		title: 'One Hundred'
	},
	{
		user: '1',
		createdAt: new Date(),
		description: 'Do something else',
		id: '101',
		modifiedAt: new Date(),
		title: 'One Hundred and One'
	},
	{
		user: '2',
		createdAt: new Date(),
		description: 'Do something new',
		id: '200',
		modifiedAt: new Date(),
		title: 'Two Hundred'
	},
	{
		user: '2',
		createdAt: new Date(),
		description: 'Do something old',
		id: '201',
		modifiedAt: new Date(),
		title: 'Two HUndred and One'
	}
]
