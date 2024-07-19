const {Router} = require('express');

const routes = new Router();

//rotas da aplicação


routes.get('/',(req,res)=>{
    return res.json({ok:true})
})


module.exports = routes;