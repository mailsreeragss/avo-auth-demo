const express = require("express");
const { register } = require('../controllers/user.controller');
const userRouter = express.Router();
const auth = require('../middleware/auth');
const allowedRole =require('../middleware/authorize')
const { CONSTANTS, USERS } = require("../config/constants");

userRouter.post('/register', register);
userRouter.post('/test-user-route', (req, res, next) => {
   return res.send('Sample User API Testing...');
});


userRouter.use(auth);
userRouter.get('/get-all-users',allowedRole(["ADMIN"]), (req, res, next) => {
   return res.status(CONSTANTS.SUCCESS_CODE).send({ success: CONSTANTS.SUCCESS, message: "All Users retrieved", data: USERS });
})

module.exports = userRouter;