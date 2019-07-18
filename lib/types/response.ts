export interface ErrorMessage {
  message: string;
}

export interface ErrorResponse {
  error: ErrorMessage;
}

export interface Response<T> {
  data?: T;
  error?: ErrorMessage;
}