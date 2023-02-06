import { IRepositories } from "../repositories";
import { AuthUseCase, IAuthUseCase } from "./auth-usecase";

export interface IUseCases {
  auth: IAuthUseCase;
}

const UseCases = (repositories: IRepositories): IUseCases => {
  return {
    auth: new AuthUseCase(repositories.auth),
  };
};
export default UseCases;
