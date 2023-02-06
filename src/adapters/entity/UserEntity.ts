import { IJwtEntity } from "./JwtEntity";

export interface IUserEntity extends IJwtEntity {
  id: number;
  email: string;
}
