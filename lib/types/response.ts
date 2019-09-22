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

export interface StatusResp {
  status: string;
}

export interface IDResp {
  id: string;
}