const express = require('express');
require('./db/connection');

const app = express();
const api = require('./api/api');
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/v1', api);

app.all('*', (req, res) => {
	res.status(404).send('Not found');
})

app.listen(port, () => {
	console.log(`listening on ${port}`);
})
