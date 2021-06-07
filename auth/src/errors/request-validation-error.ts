import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errros: ValidationError[]) {
    super("Invalid request parameters");

    // Only because we are extending a built in a class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errros.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
