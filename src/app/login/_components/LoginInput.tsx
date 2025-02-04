type LoginInputProps = {
  inputType: "text" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginInput = ({ inputType, value, onChange }: LoginInputProps) => {
  const typeList = {
    text: "text",
    password: "password",
  };
  return (
    <input
      value={value}
      type={typeList[inputType]}
      className="w-full h-[60px] pl-5 rounded-[10px] outline-none border border-[CCCCCC]"
      placeholder="아이디(이메일계정)"
      onChange={onChange}
    />
  );
};

export default LoginInput;
