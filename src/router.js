const router =  require('express').Router();
const jwt =  require('jsonwebtoken');
const {ensureToken} = require('./myMiddlewares');

router.get('/',(req,res)=>{    
    res.json({
        text:"listo"
    })
})

router.post('/api/login',(req,res)=>{
    console.log("login");    
    const user = {id:3};
    const token = jwt.sign({user},"mi palabla clave");
    res.json({
        token
    })    
})

router.get('/api/ptc',ensureToken,(req,res)=>{
    console.log("ptc");
    
    jwt.verify(req.token,"mi palabla clave",(e,data)=>{
        
        console.log(req.token);        
        
        if(e){ res.status(403).json({errpr:"error"})
            console.log("paso");}
        else{
            res.json({
                text:"protected",
                data
            })
        }
    })
})

module.exports = router;