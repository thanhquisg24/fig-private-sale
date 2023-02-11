import { AxiosResponse } from "axios";
import { BaseRepository } from "./base-repository";

export interface IReceivedTokenScheduleRepository {
  getSchedules(userId: number): Promise<AxiosResponse>;
}

export class ReceivedTokenScheduleRepository extends BaseRepository implements IReceivedTokenScheduleRepository {
  getSchedules(userId: number): Promise<AxiosResponse> {
    return this.AxiosIns.get(`/received-token-schedule/user/${userId}`);
  }
}
