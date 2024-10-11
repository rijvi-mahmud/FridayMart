import BadRequestError from './BadRequestError';

export class ErrorLogger {
   static createBadRequestError(message: string, code: number = 400): BadRequestError {
        throw new BadRequestError(message, code);
    }
}