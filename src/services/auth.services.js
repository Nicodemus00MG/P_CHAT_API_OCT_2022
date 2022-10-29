const {users} = require("../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService {
    static async authenticated(password, email) {
        try {
            let results = await users.findOne({where: {email}});
            const valid = bcrypt.compareSync(password, results.password);
            //console.log(valid);
            results = JSON.parse(JSON.stringify(results));
            if (valid){
                return {
                    valid: true,
                    ...results
                }
            }
            return {
                valid: false
            }
        } catch (error) {
            throw error;
        }
    }
    static genToken(user) {
        try {
            const token = jwt.sign(user, 'Edgar123', {
                expiresIn: "2h",
                algorithm: 'HS256'
            });
            return token;
        } catch (error) {
            throw error;
        }

    }
}
module.exports = AuthService;
