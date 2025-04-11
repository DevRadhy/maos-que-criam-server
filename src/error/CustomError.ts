export abstract class CustomError extends Error {
  abstract readonly message: string;
  abstract readonly status: number;
}