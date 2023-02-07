import { IJwtEntity } from "@adapters/entity";
import { JWT_TOKEN_EXPIREIN } from "./adapters.infrastructures.config";

const TOKEN_STORAGE_NAME = "jwtFig";
export interface IWebStorage {
  getToken(): IJwtEntity | null;
  addToken(token: string, refreshToken: string, email: string): any;
  setToken(token: string, refreshToken: string): any;
  removeToken(): void;
}

class WebStorage implements IWebStorage {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  getToken(): IJwtEntity | null {
    const strt = this.storage.getItem(TOKEN_STORAGE_NAME);
    const jwtTokenStore = strt ? JSON.parse(strt) : null;
    return jwtTokenStore;
  }

  addToken(token: string, refreshToken: string, email?: string): any {
    const currentTimestamp = Date.now();
    const almJwtToken: IJwtEntity = {
      access_token: token,
      type: "Bearer ",
      refresh_token: refreshToken,
      expiresIn: JWT_TOKEN_EXPIREIN,
      tokenCreatedAt: currentTimestamp,
    };
    this.storage.setItem(TOKEN_STORAGE_NAME, JSON.stringify(almJwtToken));
    return almJwtToken;
  }

  // eslint-disable-next-line consistent-return
  setToken(token: string, refreshToken: string): any {
    const o = this.getToken();
    if (o !== null) {
      const currentTimestamp = Date.now();
      const almJwtToken: IJwtEntity = {
        access_token: token,
        type: "Bearer ",
        refresh_token: refreshToken,
        expiresIn: JWT_TOKEN_EXPIREIN,
        tokenCreatedAt: currentTimestamp,
      };
      this.storage.setItem(TOKEN_STORAGE_NAME, JSON.stringify(almJwtToken));
      return almJwtToken;
    }
  }

  removeToken(): void {
    this.storage.removeItem(TOKEN_STORAGE_NAME);
  }
}

export default WebStorage;
