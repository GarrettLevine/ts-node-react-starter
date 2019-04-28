export interface ErrorMessage {
  message: string;
}

export interface ErrorResponse {
  error: ErrorMessage;
}

export interface Response {
  data?: any;
  error?: ErrorMessage;
}

// DataResponse represents the response when wrapping any given data in an object with the field 'data'.
export class CreateResponse {
  data: any;
  error: string;

  constructor(data: any, error: string) {
    this.data = data;
    this.error = error;
  }

  Response(): Response {
    if (this.error !== '') {
      return {
        error: { message: this.error },
      };
    }
    return {
      data: this.data,
    };
  }
}