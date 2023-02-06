import { diUseCases } from "../di";
import { IAuthPresenter } from "./auth-presenter";

export interface IPresenter {
  auth: IAuthPresenter;
}

export const presenter = {
  auth: diUseCases.auth,
};

export { diInfrastructures, diRepositorires } from "../di";
