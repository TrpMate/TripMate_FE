export type emailLoginData = {
  email: string;
  password: string;
};

export type LoginData = {
  code: string;
  socialType: string;
};

export type LoginModalProps = {
  setModalOpen: (value: boolean) => void;
};

export type OnClickProps = {
  onClick: () => void;
};

export type LoginFormProps = {
  loginData: {
    email: string;
    password: string;
  };
  setLoginData: (data: { email: string; password: string }) => void;
  setIsErrorMsg: (msg: string) => void;
};

export type LoginInputProps = {
  inputType: "text" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ModalInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type NotUserContentProps = {
  setModalOpen: (value: boolean) => void;
};

export type SocialLoginProps = {
  loginType: "kakao" | "google" | "naver";
  link: string;
  title: string;
  onClick: () => void;
};
