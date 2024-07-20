import {Router} from 'express';
import SessionController from './Controller/SessionController.js'
import HouserController from './Controller/HouserController.js';
import upload from './config/upload.js';

const routes = new Router();

//rotas da aplicação


routes.post('/session',SessionController.store)
routes.post('/houses', upload.single('file'), HouserController.store);
routes.get('/houses',HouserController.index)



export default routes;