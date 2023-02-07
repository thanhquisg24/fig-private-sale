export interface IBaseResponse {
  statusCode: number;
  message: string;
  error: string;
  success: boolean;
}

export interface IResponseBag<T> extends IBaseResponse {
  resultData: T;
}
