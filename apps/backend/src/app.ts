import express, { type Express } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { appLogger } from 'services/loggerServices';
import { errorHandler } from 'utils/ErrorHandler';
import { ErrorLogger } from 'lib/errors';

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
    // res.status(200).json({
    //     message: 'Hello World from express server. it\'s Friday!'
    // })

    ErrorLogger.createBadRequestError("bad request error", 400)
})


app.use('/health',(_req, res) => {
    res.status(200).json({
        message: 'OK'
    })
})


app.use(errorHandler);

export default app