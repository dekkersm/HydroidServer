const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

module.exports = (res, req, next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            throw new Error('Not authenticated');
        }
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        req.userData = {userId: decodedToken.userId}
        next();
    }catch(err){
        return next(new HttpError('Not authenticated', 401));
    }
    
}