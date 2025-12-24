export class CustomError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode = 500) {
      super(message);
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  }
  
  export class ValidationError extends CustomError {
    constructor(message: string) {
      super(message, 400);
    }
  }
  
  export class NotFoundError extends CustomError {
    constructor(message: string) {
      super(message, 404);
    }
  }
  
  export class AuthError extends CustomError {
    constructor(message: string) {
      super(message, 401);
    }
  }
  