import { IBodyAuth, ILoginResponse } from "shared/interfaces";

export interface IAuth {
  login: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
}
