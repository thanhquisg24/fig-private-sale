import { IUserClaimTokenPayload } from "@adapters/dto";
import { ITxClaimToken, ITxClaimTokenResponse, IUserEntity, IUserResponse } from "@adapters/entity/UserEntity";
import { IUserRepository } from "@adapters/repositories/user-repository";
import { AxiosResponse } from "axios";

export interface IUserUseCase {
  getUserInfo(id: number): Promise<IUserEntity>;
  postUserClaimToken(payload: IUserClaimTokenPayload): Promise<ITxClaimToken>;
}
export class UserUseCase implements IUserUseCase {
  readonly repository: IUserRepository;

  constructor(sessionRepositories: IUserRepository) {
    this.repository = sessionRepositories;
  }

  postUserClaimToken(payload: IUserClaimTokenPayload): Promise<ITxClaimToken> {
    return new Promise((resolve, reject) => {
      this.repository
        .postUserClaimToken(payload)
        .then((res: AxiosResponse<ITxClaimTokenResponse>) => {
          if (res.status === 200) {
            const { resultData } = res.data;
            resolve(resultData);
          }
          reject(new Error(res.data.message));
        })
        .catch((error) => reject(error));
    });
  }

  getUserInfo(id: number): Promise<IUserEntity> {
    return new Promise((resolve, reject) => {
      this.repository
        .getUserInfo(id)
        .then((res: AxiosResponse<IUserResponse>) => {
          if (res.status === 200) {
            const { resultData } = res.data;
            resolve(resultData);
          }
          reject(new Error(res.data.message));
        })
        .catch((error) => reject(error));
    });
  }
}
