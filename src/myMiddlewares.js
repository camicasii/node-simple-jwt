const middleware = {
     ensureToken:(req,res,next)=>{
    const bearerHeaders = req.headers['authorization'];
    
    if( typeof bearerHeaders !== 'undefined'){    
        const bearerToken = bearerHeaders;
        req.token = bearerToken;   
        return next();
    }
    else{
        return res.sendStatus(403);
    }
}
}
module.exports = middleware