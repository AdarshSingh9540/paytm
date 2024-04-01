const {Key} = require("./conifg");
const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startWith('Bearer')){
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,Key);

    if(decoded.userId){
        req.userId = decoded.userId;
        next();
    }
    else{
        return res.status(403).json({});
    }

       
    }
    catch(err){
        return res.status(403).json({});
    }
}

module.exports= {
    authMiddleware
}