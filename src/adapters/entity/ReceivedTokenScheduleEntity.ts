import { IResponseBag } from "../types/base-response";
import { STATUS_ENUM } from "./status-enum";

export interface IReceivedTokenScheduleEntity {
  id: number;
  userId: number;
  amount: number;
  status: STATUS_ENUM;
  receivedDate: Date;
}

export type IReceivedTokenScheduleResponse = IResponseBag<IReceivedTokenScheduleEntity>;
export type IReceivedTokenScheduleResponses = IResponseBag<IReceivedTokenScheduleEntity[]>;
