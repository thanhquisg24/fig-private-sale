import { IUserClaimTokenPayload } from "@adapters/dto";
import { AxiosResponse } from "axios";
import { BaseRepository } from "./base-repository";

export interface IUserRepository {
  postUserClaimToken(payload: IUserClaimTokenPayload): Promise<AxiosResponse>;
  getUserInfo(userId: number): Promise<AxiosResponse>;
}

export class UserRepository extends BaseRepository implements IUserRepository {
  postUserClaimToken(payload: IUserClaimTokenPayload): Promise<AxiosResponse> {
    return this.AxiosIns.post("user", payload);
  }

  getUserInfo(userId: number): Promise<AxiosResponse> {
    return this.AxiosIns.get(`/user/${userId}`);
  }
}
