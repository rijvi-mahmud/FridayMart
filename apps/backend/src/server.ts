import app from './app';
import { ENV } from 'config';
import {createServer} from 'node:http'

const server = createServer(app);

server.listen(ENV.PORT, () => {
    console.log(`Server started on port ${ENV.PORT}`);
});