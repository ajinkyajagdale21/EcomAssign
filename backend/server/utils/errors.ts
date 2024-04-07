export class HttpError extends Error {
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export const ValidationError = (message: string) => new HttpError(message, 400);
  export const UnauthorizedError = () => new HttpError('Unauthorized', 401);
  