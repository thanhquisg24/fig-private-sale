import { AxiosInstance } from "axios";

export interface IRemote {
  AxiosIns: AxiosInstance;
}

class Remote implements IRemote {
  AxiosIns: AxiosInstance;

  constructor(a: AxiosInstance) {
    this.AxiosIns = a;
  }
}

export default Remote;
