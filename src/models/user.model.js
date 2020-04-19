const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
	name: {
		type: String,
		trim: true,
		required: true
	},
	age: {
		type: Number,
		default: 0,
		validate(val) {
			if (val < 0) {
				throw new Error('Age must be positive number');
			}
		}
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		required: true,
		validate(val) {
			if (!validator.isEmail(val)) {
				throw new Error('Invalid email');
			}
		}
	},
	password: {
		type: String,
		trim: true,
		required: true,
		validate(val) {
			if (val.toLowerCase().includes('password')) {
				console.log('val: ', val);
				throw new Error('Password cannot contain "password"');
			} else if (val.length <=6) {
				throw new Error('Password must be longer than 6 characters');
			}
		}
	}
});

module.exports = User;
