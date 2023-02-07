import { ITokenEntity, ITokenResponse } from "@adapters/entity/TokenEntity";
import { ITokenRepository } from "@adapters/repositories/token-repository";
import { AxiosResponse } from "axios";

export interface ITokenUseCase {
  getTokenInfo(id: number): Promise<ITokenEntity>;
}
export class TokenUseCase implements ITokenUseCase {
  readonly repository: ITokenRepository;

  constructor(sessionRepositories: ITokenRepository) {
    this.repository = sessionRepositories;
  }

  getTokenInfo(id: number): Promise<ITokenEntity> {
    return new Promise((resolve, reject) => {
      this.repository
        .getTokenInfo(id)
        .then((res: AxiosResponse<ITokenResponse>) => {
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
