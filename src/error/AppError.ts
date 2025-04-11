import { CustomError } from "./CustomError";

export class AppError extends CustomError {
  readonly message: string;
  readonly status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.message = message;
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}