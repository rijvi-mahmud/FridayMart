import app from './app';
import { dbConnect, ENV } from 'config';
import os from 'node:os';
import cluster from "node:cluster";
import {createServer} from 'node:http'
import { dbDisconnect } from 'config/prisma';

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    // Fork workers based on CPU cores
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else {
    // Workers create their own HTTP server
    const server = createServer(app);

    // Connect to the database
    dbConnect().then(() => {
        server.listen(process.env.PORT || 8080, () => {
            console.log(`Server started on port ${process.env.PORT || 8080}`);
        });
    });

    // Ensure graceful shutdown of connections when worker exits
    process.on('SIGTERM', async () => {
        await dbDisconnect();
        process.exit(0);
    });
}