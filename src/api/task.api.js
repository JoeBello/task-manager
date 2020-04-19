const express = require('express');
const router = express.Router();

const Task = require('../models/task.model');

router.delete('/:id', async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);

		return task
			? res.status(200).send(`Task ${task.id} deleted`)
			: res.status(404).send('Task not found');
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.get('/', async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).send(tasks);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);

		return task
			? res.status(200).send(task)
			: res.status(404).send('Task not found');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.post('/', async (req, res) => {
	try {
		const task = await new Task(req.body).save();
		res.status(200).send(task);
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const task = await Task
			.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return task
			? res.status(200).send(task)
			: res.status(404).send('Task not found');
	} catch (err) {
		res.status(500).send('Server Error');
	}
});

module.exports = router;
