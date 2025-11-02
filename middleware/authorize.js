const { CONSTANTS } = require("../config/constants");

module.exports = (allowedRoles) => {

    return (req, res, next) => {
        const hasCommonValue = allowedRoles.some(item => req.user.role.includes(item));
        if (!hasCommonValue) {
            return res.status(CONSTANTS.FORBIDDEN).json({ message: "Access forbidden" });
        }
        next();
    }

}