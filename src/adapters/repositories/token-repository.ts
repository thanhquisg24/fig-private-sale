import { AxiosResponse } from "axios";
import { BaseRepository } from "./base-repository";

export interface ITokenRepository {
  getTokenInfo(id: number): Promise<AxiosResponse>;
}

export class TokenRepository extends BaseRepository implements ITokenRepository {
  getTokenInfo(id: number): Promise<AxiosResponse> {
    return this.AxiosIns.get(`/token/${id}`);
  }
}
