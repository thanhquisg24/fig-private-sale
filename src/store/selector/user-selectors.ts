import { RootStateType } from "../types";
import { IUserModel } from "@store/models/user-model";

export const getUserSelector = (state: RootStateType): IUserModel => state.user;
export const getUserIdSelector = (state: RootStateType): number | null =>
  state.user.userData ? state.user.userData.id : null;
