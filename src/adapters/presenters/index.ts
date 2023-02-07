import { diUseCases } from "../di";
import { IAuthPresenter } from "./auth-presenter";
import { ITokenUseCase } from "../useCases/token-usecase";
import { IUserUseCase } from "../useCases/user-usecase";

export interface IPresenter {
  auth: IAuthPresenter;
  tokenInfo: ITokenUseCase;
  user: IUserUseCase;
}
export const presenter = diUseCases;

// export const presenter = {
//   auth: diUseCases.auth,
//   tokenInfo: diUseCases.tokenInfo,
//   user: diUseCases.user,
// };

export { diInfrastructures, diRepositorires } from "../di";
