import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errros: ValidationError[]) {
    super();

    // Only because we are extending a built in a class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}

// throw new RequestValidationError(errors)
