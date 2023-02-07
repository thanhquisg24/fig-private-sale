import { IInfrastructures } from "../infrastructures";
import { AuthRepository, IAuthRepository } from "./auth-repository";
import { ITokenRepository, TokenRepository } from "./token-repository";
import { IVestingHistoryRepository, VestingHistoryRepository } from "./vesting-history-repository";
import { IUserRepository, UserRepository } from "./user-repository";

export interface IRepositories {
  auth: IAuthRepository;
  tokenInfo: ITokenRepository;
  vestingHistory: IVestingHistoryRepository;
  user: IUserRepository;
}

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    auth: new AuthRepository(infrastructure),
    tokenInfo: new TokenRepository(infrastructure),
    vestingHistory: new VestingHistoryRepository(infrastructure),
    user: new UserRepository(infrastructure),
  };
};
