import { IResponseBag } from "../types/base-response";

export interface IUserEntity {
  id: number;
  email: string;
  price: number;
  totalAmount: number;
  locked: number;
  avaiable: number;
  claimed: number;
  startDate: Date;
  endDate: Date;
  vestingLogic: string;
  refreshtoken: string;
  refreshtokenexpires: Date;
  createdAt: Date;
}

export type IUserResponse = IResponseBag<IUserEntity>;

export interface ITxClaimToken {
  tx: string;
}

export type ITxClaimTokenResponse = IResponseBag<ITxClaimToken>;
