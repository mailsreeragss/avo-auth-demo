const jwt = require('jsonwebtoken');
const { CONSTANTS } = require('../config/constants');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // console.log("token---",token);
        
        const verifiedToken = jwt.verify(token, process.env.jwt_secret);
        // console.log("verifiedToken", verifiedToken)
        if (typeof req.body != 'object') {
            req.body = {}
        }
        req.user = verifiedToken;
        // console.log("req====>>>",req.user)
        next()
	} catch (error) {
		res
			.status(CONSTANTS.NOT_AUTHENTICATED)
			.send({ status: CONSTANTS.FAILURE, message: 'Login Failure' });
	}
};

module.exports = auth;
