import app from './app';
import { dbConnect, ENV } from 'config';
import os from 'node:os';
import cluster from "node:cluster";
import {createServer} from 'node:http'

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    // Workers can share any TCP connection
    // In this case, it will be an HTTP server
    const server = createServer(app);
    dbConnect().then(() => {
        server.listen(ENV.PORT, () => {
            console.log(`Server started on port ${ENV.PORT}`);
        });
    })
}