import {
  IReceivedTokenScheduleEntity,
  IReceivedTokenScheduleResponses,
} from "@adapters/entity/ReceivedTokenScheduleEntity";
import { IReceivedTokenScheduleRepository } from "@adapters/repositories/received-token-schedule-repository";
import { AxiosResponse } from "axios";

export interface IReceivedTokenScheduleUseCase {
  getSchedules(userId: number): Promise<IReceivedTokenScheduleEntity[]>;
}
export class ReceivedTokenScheduleUseCase implements IReceivedTokenScheduleUseCase {
  readonly repository: IReceivedTokenScheduleRepository;

  constructor(sessionRepositories: IReceivedTokenScheduleRepository) {
    this.repository = sessionRepositories;
  }

  getSchedules(userId: number): Promise<IReceivedTokenScheduleEntity[]> {
    return new Promise((resolve, reject) => {
      this.repository
        .getSchedules(userId)
        .then((res: AxiosResponse<IReceivedTokenScheduleResponses>) => {
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
