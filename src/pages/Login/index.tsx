import { Header } from "components";
import { auth } from "services";
import { IBodyAuth } from "shared/interfaces";
import { LoginContainer } from "./styles";

const Login = () => {
  const { login } = auth();

  const handleSubmit = async ({ email, password }: IBodyAuth) => {
    login({ email, password })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("userToken", res.data.token.token);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <h1>Login</h1>
      </LoginContainer>
    </>
  );
};

export default Login;
