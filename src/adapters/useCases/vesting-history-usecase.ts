import { IVestingHistoryEntity, IVestingHistoryResponses } from "@adapters/entity/VestingHistoryEntity";
import { IVestingHistoryRepository } from "@adapters/repositories/vesting-history-repository";
import { AxiosResponse } from "axios";

export interface IVestingHistoryUseCase {
  getVestingHistoryInfo(userId: number): Promise<IVestingHistoryEntity[]>;
}
export class VestingHistoryUseCase implements IVestingHistoryUseCase {
  readonly repository: IVestingHistoryRepository;

  constructor(sessionRepositories: IVestingHistoryRepository) {
    this.repository = sessionRepositories;
  }

  getVestingHistoryInfo(userId: number): Promise<IVestingHistoryEntity[]> {
    return new Promise((resolve, reject) => {
      this.repository
        .getVestingHistoryInfos(userId)
        .then((res: AxiosResponse<IVestingHistoryResponses>) => {
          if (res.status === 200) {
            const { resultData } = res.data;
            resolve(resultData);
          }
          reject(new Error(res.data.message));
        })
        .catch((error) => reject(error));
    });
  }
}
