const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.delete('/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);

		return user
			? res.status(200).send(`User ${user.id} deleted`)
			: res.status(404).send('User not found');
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		return user
			? res.status(200).send(user)
			: res.status(404).send('User not found');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.post('/', async (req, res) => {
	try {
		const user = await new User(req.body).save();
		res.status(200).send(user);
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const user = await User
			.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return user
			? res.status(200).send(user)
			: res.status(404).send('User not found');
	} catch (err) {
		res.status(500).send('Server Error');
	}
});

module.exports = router;
