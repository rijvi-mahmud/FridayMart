import express, { type Express } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { appLogger, testLogger } from 'services/loggerServices';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
}));
app.use(morgan('dev'));


app.get('/', (_req, res) => {
    appLogger.info('Hello World from express server. it\'s Friday!');
    testLogger.info('Hello World from express server. it\'s Friday! and it\'s a test!');
    res.status(200).json({
        message: 'Hello World from express server. it\'s Friday!'
    })
})


export default app