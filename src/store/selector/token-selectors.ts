import { ITokenModel } from "@store/models/token-model";
import { RootStateType } from "../types";

export const getTokenSelector = (state: RootStateType): ITokenModel => state.token;
export const getTokenSymbolSelector = (state: RootStateType): string =>
  state.token.tokenInfoData ? state.token.tokenInfoData.tokenSymbol : "";
