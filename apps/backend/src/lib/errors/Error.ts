class BaseError extends Error {
    code: number;
    constructor(message: string, code: number = 500) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

export default BaseError