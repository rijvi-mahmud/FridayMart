import BaseError from "./Error";

class BadRequestError extends BaseError{
    constructor(message: string, code: number = 400) {
        super(message, code);
    }
}

export default BadRequestError