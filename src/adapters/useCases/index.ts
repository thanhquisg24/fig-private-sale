import { IRepositories } from "../repositories";
import { AuthUseCase, IAuthUseCase } from "./auth-usecase";
import { ITokenUseCase, TokenUseCase } from "./token-usecase";
import { UserUseCase, IUserUseCase } from "./user-usecase";
import { IVestingHistoryUseCase, VestingHistoryUseCase } from "./vesting-history-usecase";

export interface IUseCases {
  auth: IAuthUseCase;
  tokenInfo: ITokenUseCase;
  user: IUserUseCase;
  vestingHistory: IVestingHistoryUseCase;
}

const UseCases = (repositories: IRepositories): IUseCases => {
  return {
    auth: new AuthUseCase(repositories.auth),
    tokenInfo: new TokenUseCase(repositories.tokenInfo),
    user: new UserUseCase(repositories.user),
    vestingHistory: new VestingHistoryUseCase(repositories.vestingHistory),
  };
};
export default UseCases;
