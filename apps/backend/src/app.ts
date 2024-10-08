import express, { type Express } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
}));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World from express server. it\'s Friday!'
    })
})


export default app