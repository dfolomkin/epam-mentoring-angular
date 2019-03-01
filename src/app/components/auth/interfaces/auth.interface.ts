export interface IAuthPair {
  login: string;
  password: string;
}

export interface IResWithToken extends IAuthPair {
  token: string;
}
