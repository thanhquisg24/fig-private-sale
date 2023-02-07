import { IResponseBag } from "../types/base-response";

export interface IVestingHistoryEntity {
  id: number;

  txId: string;
  userId: number;
  amount: number;
  fromAddress: string;
  toAddress: string;

  createdAt: Date;
}

export type IVestingHistoryResponse = IResponseBag<IVestingHistoryEntity>;
export type IVestingHistoryResponses = IResponseBag<IVestingHistoryEntity[]>;
