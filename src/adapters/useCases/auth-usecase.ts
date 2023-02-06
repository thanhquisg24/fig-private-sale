import { IJwtEntity } from "@adapters/entity";
import { setAxiosHeaderAuth } from "@adapters/infrastructures/axios/customeAxios";
import { IAuthRepository } from "@adapters/repositories/auth-repository";
import { AxiosResponse } from "axios";
import { diInfrastructures } from "../di";

export interface IAuthUseCase {
  postLogin(email: string, password: string): Promise<IJwtEntity>;
  postLogout(email: string): Promise<string>;
  postRefreshToken(refreshToken: string): Promise<IJwtEntity>;
  postCheckToken(token: string): Promise<boolean>;
  checkInitLocalStorageLogin(): Promise<IJwtEntity>;
}
export class AuthUseCase implements IAuthUseCase {
  readonly repository: IAuthRepository;

  constructor(sessionRepositories: IAuthRepository) {
    this.repository = sessionRepositories;
  }

  checkInitLocalStorageLogin(): Promise<IJwtEntity> {
    const store = diInfrastructures.webStorage.getToken();
    if (store === null) {
      return Promise.reject(new Error("Not found token in store!"));
    }
    setAxiosHeaderAuth(store.access_token);
    return new Promise((resolve, reject) => {
      this.repository
        .postCheckToken(store.access_token)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            // const { data } = res;
            const user: IJwtEntity = store;
            resolve(user);
          }
          reject(new Error(`CheckToken Error HTTP status code ${res.status}`));
        })
        .catch((error) => reject(error));
    });
  }

  private storeAuth(token: string, refreshToken: string, email: string): any {
    return diInfrastructures.webStorage.addToken(token, refreshToken, email);
  }

  private removeAuth(): void {
    diInfrastructures.webStorage.removeToken();
  }

  postLogin(email: string, password: string): Promise<IJwtEntity> {
    return new Promise((resolve, reject) => {
      this.repository
        .postLogin(email, password)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            const { data } = res;
            const newJwt = this.storeAuth(data.token, data.refreshToken, data.email);
            setAxiosHeaderAuth(data.token);
            resolve(newJwt);
          }
          reject(new Error(`Login Error HTTP status code ${res.status}`));
        })
        .catch((error) => reject(error));
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
          reject(new Error(`Logout Error HTTP status code ${res.status}`));
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
            const { data } = res;
            const newJwt = diInfrastructures.webStorage.setToken(data.accessToken, data.refreshToken);
            setAxiosHeaderAuth(data.accessToken);
            resolve(newJwt);
          }
          reject(new Error(`RefreshToken Error HTTP status code ${res.status}`));
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
