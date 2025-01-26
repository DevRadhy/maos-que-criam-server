import { CustomError } from "./CustomError";

export class AppError extends CustomError {
  readonly message: string;
  readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}