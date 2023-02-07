import { AxiosResponse } from "axios";
import { BaseRepository } from "./base-repository";

export interface IVestingHistoryRepository {
  getVestingHistoryInfos(userId: number): Promise<AxiosResponse>;
}

export class VestingHistoryRepository extends BaseRepository implements IVestingHistoryRepository {
  getVestingHistoryInfos(userId: number): Promise<AxiosResponse> {
    return this.AxiosIns.get(`/vesing-history/byUserId/${userId}`);
  }
}
