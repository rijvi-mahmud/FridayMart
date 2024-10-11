import { ErrorRequestHandler,Request, Response, NextFunction } from "express";
import BaseError from "lib/errors/Error";

const errorHandler = (err: BaseError, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(err.code || 500).json({ message: err.message, error: err, stack: err.stack, code: err.code });
}

export { errorHandler };