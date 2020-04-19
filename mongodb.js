// crud

const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const dbOptions = {
	useNewUrlParser: true
};

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

// original lecture architecture
// MongoClient.connect(connectionUrl, dbOptions, (err, client) => {
// 	if (err) {
// 		console.log('Failed to connect to database');
// 		return;
// 	}

// 	const db = client.db(databaseName);

// 	console.log('Connected to database');

// 	// insert one
// 	// db.collection('users').insertOne({
// 	// 	name: 'Nameless',
// 	// 	age: 100
// 	// }, (err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Failed to insert user');
// 	// 	}
		
// 	// 	console.log(res.ops);
// 	// });

// 	// const users = [
// 	// 	{
// 	// 		name: 'Bob',
// 	// 		age: 40
// 	// 	},
// 	// 	{
// 	// 		name: 'John',
// 	// 		age: 35
// 	// 	}
// 	// ];

// 	// insert many
// 	// db.collection('users').insertMany(users, (err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Failed to save users');
// 	// 		return;
// 	// 	}

// 	// 	console.log(res.ops);
// 	// });

// 	// const tasks = [
// 	// 	{
// 	// 		description: 'Clean the kitchen',
// 	// 		completed: false
// 	// 	},
// 	// 	{
// 	// 		description: 'Grocery list',
// 	// 		completed: false
// 	// 	},
// 	// 	{
// 	// 		description: 'Meal preperation',
// 	// 		completed: false
// 	// 	}
// 	// ];

// 	// insert many
// 	// db.collection('tasks').insertMany(tasks, (err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Failed to save tasks');
// 	// 		return;
// 	// 	}

// 	// 	console.log(res.ops);
// 	// });

// 		// db.collection('users').findOne({
// 	// 	"name": 'Joe'
// 	// }, (err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Error: ', err);
// 	// 		return;
// 	// 	}

// 	// 	console.log('Response: ', res);
// 	// });

// 	// find all
// 	// db.collection('users').find({
// 	// 	"name": 'Joe'
// 	// }).toArray((err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Error: ', err);
// 	// 		return;
// 	// 	}

// 	// 	console.log('Response: ', res);
// 	// });

// 	// find one
// 	// db.collection('users').findOne(
// 	// 	{ _id: new ObjectId("5e80d68a1de75a0c856d2b2b") }, (err, res) => {
// 	// 	console.log(res);
// 	// });

// 	// db.collection('users').find({ age: 37}).toArray((err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Error: ', err);
// 	// 		return;
// 	// 	}

// 	// 	console.log(res);
// 	// });

// 	// db.collection('users').find({ age: 37}).count((err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Error: ', err);
// 	// 		return;
// 	// 	}

// 	// 	console.log(res);
// 	// });

// 	// find the last task by id
// 	// db.collection('tasks').findOne({ _id: ObjectId("5e77c50ee28d037179df3f0a")}, (err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Error: ', err);
// 	// 		return;
// 	// 	}

// 	// 	console.log(res);
// 	// });

// 	// find all tasks that are not completed
// 	// db.collection('tasks').find({ completed: false }).toArray((err, res) => {
// 	// 	if (err) {
// 	// 		console.log('Error: ', err);
// 	// 		return;
// 	// 	}

// 	// 	console.log(res);
// 	// });

// 	// db.collection('tasks')
// 	// 	.find({ completed: false})
// 	// 	.toArray()
// 	// 	.then(res => console.log(res))
// 	// 	.catch(err => console.log(err));

// 	// update one
// 	// db.collection('users')
// 	// 	.updateOne(
// 	// 		{ _id: ObjectId("5e80d68a1de75a0c856d2b2b") },
// 	// 		{ $set: { age: 101 } }
// 	// 	)
// 	// 	.then(res => console.log(res))
// 	// 	.catch(err => console.log(err));

// 	// increment an attribute for one
// 	// db.collection('users')
// 	// 	.updateOne(
// 	// 		{ name: 'Nameless' },
// 	// 		{ $inc: { age: -3 } }
// 	// 	)
// 	// 	.then(res => console.log(res))
// 	// 	.catch(err => console.log(err));

// 	db.collection('tasks')
// 		.updateMany(
// 			{ completed: false },
// 			{ $set: { newAttribute: true } }
// 		)
// 		.then(res => console.log(res))
// 		.catch(err => console.log(err));
	
// 	db.collection('tasks')
// 		.updateMany(
// 			{ newAttribute: false, newAttribute: true },
// 			{ $unset: { newAttribute: '' } }
// 		)
// 		.then(res => console.log(res))
// 		.catch(err => console.log(err));
// })

// updated lecture architecture
const lectureMaterial = function lectureMaterial(db) {
	console.log('Executing lecture material...');

	// return db.collection('tasks')
	// 	.updateMany(
	// 		{ completed: false },
	// 		{ $set: { newAttribute: true } }
	// 	)
	
	// return db.collection('tasks')
	// 	.updateMany(
	// 		{ newAttribute: false, newAttribute: true },
	// 		{ $unset: { newAttribute: '' } }
	// 	)

	// delete one
	// return db.collection('tasks')
	// 	.deleteOne({ _id: ObjectId("5e77c50ee28d037179df3f08") });

	// delete many
	// return db.collection('tasks')
	// 	.deleteMany({ completed: false });

	// const tasks = [
	// 	{
	// 		action: 'Study',
	// 		complete: false
	// 	},
	// 	{
	// 		action: 'Clean',
	// 		complete: true
	// 	},
	// 	{
	// 		action: 'Cook',
	// 		complete: true
	// 	},
	// 	{
	// 		action: 'Rest',
	// 		complete: false
	// 	},
	// ]

	// return db.collection('tasks')
	// 	.insertMany(tasks)
}

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, dbOptions)
	.then(client => lectureMaterial(client.db(databaseName)))
	.then(res => console.log(res))
	.catch(err => console.log(err));
