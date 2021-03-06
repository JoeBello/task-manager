const mongoose = require('mongoose');

const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api';

const connectionOptions = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
};

mongoose.connect(connectionUrl, connectionOptions);
