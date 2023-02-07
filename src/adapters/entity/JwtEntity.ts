import { IResponseBag } from "@adapters/types";

export interface ILoginEntity {
  access_token: string;
  refresh_token: string;
}

export interface IJwtEntity extends ILoginEntity {
  type: string;
  expiresIn: number;
  tokenCreatedAt: number;
}
export type ILoginResponse = IResponseBag<ILoginEntity>;
