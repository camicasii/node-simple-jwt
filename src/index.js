const express =  require('express');
const {ensureToken} = require('./myMiddlewares');
const router = require('./router');

const app = express();

app.set('port', process.env.PORT||3000);
//Middlewares
app.use(ensureToken);


//router
app.use(router);

app.listen(app.get('port'),()=>{
    console.log("server on port ",app.get('port'));
    
})