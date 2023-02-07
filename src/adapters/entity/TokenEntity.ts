import { IResponseBag } from "../types/base-response";

export interface ITokenEntity {
  id: number;
  tokenAddress: string;
  tokenSymbol: string;
  tokenScanUrl: string;
  createdAt: Date;
}

export type ITokenResponse = IResponseBag<ITokenEntity>;
