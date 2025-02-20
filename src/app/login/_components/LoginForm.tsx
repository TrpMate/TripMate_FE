import LoginInput from "./LoginInput";

type LoginFormProps = {
  loginData: {
    email: string;
    password: string;
  };
  setLoginData: (data: { email: string; password: string }) => void;
};

const LoginForm = ({ loginData, setLoginData }: LoginFormProps) => {
  return (
    <div className="mt-[30px] flex flex-col gap-[15px]">
      <LoginInput
        inputType="text"
        value={loginData.email}
        onChange={(e) =>
          setLoginData({
            ...loginData,
            email: e.target.value,
          })
        }
      />
      <LoginInput
        inputType="password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({
            ...loginData,
            password: e.target.value,
          })
        }
      />
    </div>
  );
};

export default LoginForm;
