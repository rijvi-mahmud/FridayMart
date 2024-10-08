import express, { type Express } from 'express'

const app: Express = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World from express server. it\'s Friday!'
    })
})


export default app