export interface Response {
  data: any;
}

// DataResponse represents the response when wrapping any given data in an object with the field 'data'.
export class DataResponse {
  data: any;
  constructor(data: any) {
    this.data = data;
  }

  Data(): Response {
    return {
      data: this.data,
    };
  }
}