const CONSTANTS = {
	SUCCESS: 'Success',
	FAILURE: 'Failure',
    SUCCESS_CODE: 200,
    FAILURE_CODE: 400,
	NOT_AUTHENTICATED: 401,
	NOT_FOUND: 404,
    INT_SERVER_ERROR: 500,
    FORBIDDEN: 403
};

const USERS = [
	{
		userId: 1,
		name: 'Sreerag',
        password: '$2b$10$Rr4n0yNpFoVQQIJyRB44duodNjTfJ/o53FmQ4rUOuIY8vlLE1TSO6',
        role: ["ADMIN"],
		email: 'mailsreeragss@gmail.com',
	},
	{
		userId: 2,  
		name: 'Test User',
		password: '$2a$10$CtVbDLyMopz.qpRk1vQkeu9JNRsZ6Ao5RGjY3fVfQrwkh3KzUXwNq',
        email: 'test@gmail.com',
        role: ["USER"]
	},
];

module.exports = { CONSTANTS, USERS };
