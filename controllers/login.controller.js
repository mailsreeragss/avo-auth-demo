const { USERS, CONSTANTS } = require("../config/constants");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async(req, res) => {
    try {

        // console.log("reACHED HERE",process.env.jwt_secret)
        const user = USERS.find((person) => person.email == req.body.email);

        if (!user) {
            return res.status(CONSTANTS.NOT_FOUND).json({ success: CONSTANTS.FAILURE, message: "User Not Found" });
        }

        // Validate Password
        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        // console.log("User",user, req.body.password, user.password)
        if (!validatePassword) {
           return res.status(CONSTANTS.NOT_AUTHENTICATED).json({ success: CONSTANTS.FAILURE, message: "Incorrect Password" });
        }

        // jwt token
        const jwtToken = jwt.sign({ userId: user.userId, name: user.name, role: user.role }, process.env.jwt_secret, { expiresIn: "1d" });
        const refreshToken = jwt.sign({ userId: user.userId }, process.env.refresh_secret, { expiresIn: "7d" });
        
        return res.status(CONSTANTS.SUCCESS_CODE).send({ success: CONSTANTS.SUCCESS, message: "Logged in successfully" , access: jwtToken, refreshToken : refreshToken});

    } catch (error) {
        console.log(error)
        return res.status(CONSTANTS.FAILURE_CODE).json({
            success: CONSTANTS.FAILURE,
            message: "Something went wrong",
          });
    }
}

module.exports = {login}