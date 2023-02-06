import { AxiosResponse } from "axios";
import { BaseRepository } from "./base-repository";

export interface IAuthRepository {
  postLogin(email: string, password: string): Promise<AxiosResponse>;
  postLogout(email: string): Promise<AxiosResponse>;
  postRefreshToken(refreshToken: string): Promise<AxiosResponse>;
  postCheckToken(token: string): Promise<AxiosResponse>;
}

export class AuthRepository extends BaseRepository implements IAuthRepository {
  postLogin(email: string, password: string): Promise<AxiosResponse> {
    const payload = {
      email,
      password,
    };
    return this.AxiosIns.post("/auth/login", payload);
  }

  postLogout(email: string): Promise<AxiosResponse> {
    const payload = {
      email,
    };
    return this.AxiosIns.post("/auth/logout", payload);
  }

  postRefreshToken(refreshToken: string): Promise<AxiosResponse> {
    const payload = {
      refreshToken,
    };
    return this.AxiosIns.post("/auth/refresh-token", payload);
  }

  postCheckToken(token: string): Promise<AxiosResponse> {
    return this.AxiosIns.post("/auth/check_token", { token });
  }
}
