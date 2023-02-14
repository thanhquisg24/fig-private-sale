import { IJwtEntity, ILoginResponse } from "@adapters/entity";

import { AxiosResponse } from "axios";
import { IAuthRepository } from "@adapters/repositories/auth-repository";
import { diInfrastructures } from "../di";
import { getApiCatchErr } from "@adapters/utils";
import { setAxiosHeaderAuth } from "@adapters/infrastructures/axios/customeAxios";

export interface IAuthUseCase {
  postLogin(email: string, password: string): Promise<IJwtEntity>;
  postLogout(email: string): Promise<string>;
  postRefreshToken(refreshToken: string): Promise<IJwtEntity>;
  postCheckToken(token: string): Promise<boolean>;
  checkInitLocalStorageLogin(): Promise<IJwtEntity | null>;
  cleanAuthData(): void;
}
export class AuthUseCase implements IAuthUseCase {
  readonly repository: IAuthRepository;

  constructor(sessionRepositories: IAuthRepository) {
    this.repository = sessionRepositories;
  }

  cleanAuthData(): void {
    this.removeAuth();
  }

  checkInitLocalStorageLogin(): Promise<IJwtEntity | null> {
    const store = diInfrastructures.webStorage.getToken();
    if (store === null) {
      return Promise.resolve(null);
      // return Promise.reject(new Error("Not found token in store!"));
    }
    setAxiosHeaderAuth(store.access_token);
    return new Promise((resolve, reject) => {
      this.repository
        .postCheckToken(store.access_token)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            // const { data } = res;
            const jwt: IJwtEntity = store;
            resolve(jwt);
          }
          reject(new Error(res.data.message));
        })
        .catch((error) => reject(error));
    });
  }

  private storeAuth(token: string, refreshToken: string, email: string, userId: number): any {
    return diInfrastructures.webStorage.addToken(token, refreshToken, email, userId);
  }

  private removeAuth(): void {
    diInfrastructures.webStorage.removeToken();
  }

  postLogin(email: string, password: string): Promise<IJwtEntity> {
    return new Promise((resolve, reject) => {
      this.repository
        .postLogin(email, password)
        .then((res: AxiosResponse<ILoginResponse>) => {
          if (res.status === 200) {
            const { resultData } = res.data;
            const newJwt = this.storeAuth(
              resultData.access_token,
              resultData.refresh_token,
              resultData.email,
              resultData.userId,
            );
            setAxiosHeaderAuth(resultData.access_token);
            resolve(newJwt);
          } else {
            reject(new Error(res.data.message));
          }
        })
        .catch((error) => {
          return reject(getApiCatchErr(error));
        });
    });
  }

  postLogout(email: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.repository
        .postLogout(email)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            this.removeAuth();
            setAxiosHeaderAuth("");
            resolve("Logout Success!");
          }
          reject(new Error(res.data.message));
        })
        .catch((error) => reject(error));
    });
  }

  postRefreshToken(refreshToken: string): Promise<IJwtEntity> {
    return new Promise((resolve, reject) => {
      this.repository
        .postRefreshToken(refreshToken)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            const { resultData } = res.data;
            const newJwt = diInfrastructures.webStorage.setToken(
              resultData.access_token,
              resultData.refresh_token,
              resultData.email,
              resultData.userId,
            );
            setAxiosHeaderAuth(resultData.accessToken);
            resolve(newJwt);
          }
          reject(new Error(res.data.message));
        })
        .catch((error) => reject(error));
    });
  }

  postCheckToken(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.repository
        .postCheckToken(token)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            resolve(true);
          }
          reject(new Error(`CheckToken Error HTTP status code ${res.status}`));
        })
        .catch((error) => reject(error));
    });
  }
}
