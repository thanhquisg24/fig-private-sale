import { IRepositories } from "../repositories";
import { AuthUseCase, IAuthUseCase } from "./auth-usecase";
import { IReceivedTokenScheduleUseCase, ReceivedTokenScheduleUseCase } from "./received-token-schedule-usecase";
import { ITokenUseCase, TokenUseCase } from "./token-usecase";
import { UserUseCase, IUserUseCase } from "./user-usecase";
import { IVestingHistoryUseCase, VestingHistoryUseCase } from "./vesting-history-usecase";

export interface IUseCases {
  auth: IAuthUseCase;
  tokenInfo: ITokenUseCase;
  user: IUserUseCase;
  vestingHistory: IVestingHistoryUseCase;
  tokenSchedule: IReceivedTokenScheduleUseCase;
}

const UseCases = (repositories: IRepositories): IUseCases => {
  return {
    auth: new AuthUseCase(repositories.auth),
    tokenInfo: new TokenUseCase(repositories.tokenInfo),
    user: new UserUseCase(repositories.user),
    vestingHistory: new VestingHistoryUseCase(repositories.vestingHistory),
    tokenSchedule: new ReceivedTokenScheduleUseCase(repositories.tokenSchedule),
  };
};
export default UseCases;
