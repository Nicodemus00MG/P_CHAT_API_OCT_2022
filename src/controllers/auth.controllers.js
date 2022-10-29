const AuthService = require("../services/auth.services");

const authUser = async (req, res, next)=>{
    try {
        const {email, password} = req.body;
        const result = await AuthService.authenticated(password, email);
        if(result.valid){
            let userObj = {
                id: result.id,
                firstname: result.firstname,
                lastname: result.lastname,
                email: result,email
            }
            const token = AuthService.genToken(userObj);
            return res.json({
                message: "has iniciado sesion",
                token
            })
        }
        return res.json({
            message: "Las credenciales son incorrectas"
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    authUser
}