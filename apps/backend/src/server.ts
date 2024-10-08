import express, {Express} from 'express';
import app from './app';

const server: Express = express();

server.use(app);

server.listen(3000, () => {
    console.log('Server started on port 3000');
});