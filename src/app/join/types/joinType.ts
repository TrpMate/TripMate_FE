export type JoinData = {
  email: string;
  name: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

export type JoinInputProps = {
  valid?: boolean;
  type: "text" | "password";
  value: string;
  title: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

export type JoinInputFormProps = {
  isEmailValid: (email: string) => boolean;
  isPasswordValid: (password: string) => boolean;
  isPasswordCheckValid: (password: string, passwordCheck: string) => boolean;
  joinData: JoinData;
  setJoinData: (data: JoinData) => void;
  nicknameValid: boolean | undefined;
  setNicknameValid: (valid: boolean | undefined) => void;
  handleNicknameCheck: (nickname: string) => void;
};

export type JoinMessageProps = {
  input?: string;
  title: "사용가능" | "사용 불가능" | "비밀번호 불일치" | "";
};
