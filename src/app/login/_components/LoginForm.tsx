import { LoginFormProps } from "../types/loginType";
import LoginInput from "./LoginInput";

const LoginForm = ({
  loginData,
  setLoginData,
  setIsErrorMsg,
}: LoginFormProps) => {
  return (
    <div className="mt-[30px] flex flex-col gap-[15px]">
      <LoginInput
        inputType="text"
        value={loginData.email}
        onChange={(e) => {
          setLoginData({
            ...loginData,
            email: e.target.value,
          });
          setIsErrorMsg("");
        }}
      />
      <LoginInput
        inputType="password"
        value={loginData.password}
        onChange={(e) => {
          setLoginData({
            ...loginData,
            password: e.target.value,
          });
          setIsErrorMsg("");
        }}
      />
    </div>
  );
};

export default LoginForm;
