import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';

class App {
    constructor() {
        this.server = express();
        mongoose.connect('mongodb+srv://kervemdev:kira%40123@cluster0.mr1dsx8.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0');
        mongoose.connection.on('connected', () => {
            console.log('Conectado ao MongoDB com sucesso!');
        });
        mongoose.connection.on('error', (err) => {
            console.error(`Erro na conexão com o MongoDB: ${err}`);
        });
        this.middleware();
        this.router();
    }
    //middlewares
    middleware() {
        this.server.use(express.json());
    }
    router() {
        this.server.use(routes);
    }
}

export default new App().server;
