const jwt = require("jsonwebtoken");

const validateToken = (req, res, next)=>{
    const bearerToken = req.headers.authorization;
    if (bearerToken){
        const token = bearerToken.split("Bearer ")[1];
        try {
            const decoded = jwt.verify(token, "Edgar123");
            console.log(req);
            req.user = decoded;
            next();
        } catch (error) {
            next(error);
        }
    }
};

module.exports={
    validateToken
};
