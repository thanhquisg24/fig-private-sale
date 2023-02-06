export const AXIOS_BASE_URL = process.env.REACT_APP_AXIOS_API || "/api/v1";
export const JWT_TOKEN_EXPIREIN = 1000 * 60 * 50; //5 minute
export interface IFakeSocketConfig {
  IS_RUNNING_FAKE_SOCKET: boolean;
  INTERVAL_FETCH_TIME: number;
}
export const FAKE_SOCKET_CONFIG: IFakeSocketConfig = {
  IS_RUNNING_FAKE_SOCKET: false,
  INTERVAL_FETCH_TIME: 5000,
};
