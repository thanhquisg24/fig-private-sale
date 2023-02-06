import { IInfrastructures } from "../infrastructures";
import { AuthRepository, IAuthRepository } from "./auth-repository";

export interface IRepositories {
  auth: IAuthRepository;
}

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    auth: new AuthRepository(infrastructure),
  };
};
