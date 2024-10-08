import express, {Express} from 'express';
import app from './app';
import { ENV } from 'config/env';

const server: Express = express();

server.use(app);

server.listen(ENV.PORT, () => {
    console.log(`Server started on port ${ENV.PORT}`);
});