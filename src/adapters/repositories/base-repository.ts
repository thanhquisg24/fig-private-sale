import { IInfrastructures } from "../infrastructures";
import { AxiosInstance } from "axios";

export class BaseRepository {
  readonly infra: IInfrastructures;

  AxiosIns: AxiosInstance;

  constructor(infrastructure: IInfrastructures) {
    this.infra = infrastructure;
    this.AxiosIns = infrastructure.remote.AxiosIns;
  }
}
