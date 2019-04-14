class ErrorType {
  message: string;

  constructor(msg: string) {
    this.message = msg;
  }

  Message() {
    return this.message;
  }
}

// ServiceError represents a service level (5xx) error.
export class ServiceError extends ErrorType {
  message: string;
  code: number;

  constructor(msg: string = 'internal server error', code: number = 500) {
    super(msg);
    this.message = msg;
    this.code = code;
  }
}

// ClientError represents a service level (4xx) error.
export class ClientError extends ErrorType {
  message: string;
  code: number;

  constructor(msg: string, code: number = 400) {
    super(msg);
    this.message = msg;
    this.code = code;
  }
}