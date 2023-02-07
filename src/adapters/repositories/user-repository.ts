import { AxiosResponse } from "axios";
import { BaseRepository } from "./base-repository";

export interface IUserRepository {
  getUserInfo(userId: number): Promise<AxiosResponse>;
}

export class UserRepository extends BaseRepository implements IUserRepository {
  getUserInfo(userId: number): Promise<AxiosResponse> {
    return this.AxiosIns.get(`/user/${userId}`);
  }
}
