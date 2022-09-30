import { api } from "services/api";
import { IBodyAuth, ILoginResponse } from "shared/interfaces";
import { IAuth } from "./interfaces";

const auth = (): IAuth => {
  const login = async (body: IBodyAuth): Promise<ILoginResponse> => {
    return api.post("login", body);
  };

  return { login };
};

export default auth;
