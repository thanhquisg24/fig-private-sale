export interface IJwtEntity {
  access_token: string;
  type: string;
  refresh_token: string;
  expiresIn: number;
  createdAt: number;
}
