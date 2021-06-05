import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  statusCode = 400;
  constructor(public errros: ValidationError[]) {
    super();

    // Only because we are extending a built in a class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errros.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}

// throw new RequestValidationError(errors)
