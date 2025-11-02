const { USERS, CONSTANTS } = require('../config/constants');
const bcrypt = require('bcrypt');
const validator = require('validator');

const register = async (req, res) => {
	try {
		// check user exists
		const { email, password } = req.body;
		const userExists = USERS.find((person) => person.email == email);

		// Check if all required fields are present
		if (!email || !password) {
			return res
				.status(CONSTANTS.FAILURE_CODE)
				.json({ message: 'Email and password are required' });
		}

		if (!validator.isEmail(email)) {
			return res
				.status(CONSTANTS.FAILURE_CODE)
				.json({ message: 'Invalid email format' });
		}

		if (userExists) {
			return res.json({
				success: CONSTANTS.FAILURE,
				message: 'User Already Exists',
			});
		}

		if (password.length < 5) {
			return res
				.status(CONSTANTS.FAILURE_CODE)
				.json({ message: 'Password must be at least 5 characters long' });
		}

		const salt = 10;
		const hashedPassword = await bcrypt.hash(password, salt);

		// save to db
		// actual db call mocked.
		// saved in inmemory constant USER

		USERS.push({ ...req.body, password: hashedPassword });
		return res.json({
			success: CONSTANTS.SUCCESS,
			message: 'Registration Successful!',
			allUsers: USERS, // can be commented , for testing purpose kept it here
		});
	} catch (error) {
		console.log(error);
		return res.status(CONSTANTS.FAILURE_CODE).json({
			success: CONSTANTS.FAILURE,
			message: 'Something went wrong',
		});
	}
};

module.exports = { register };
