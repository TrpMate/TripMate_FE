import H27Title from "@/components/subTitle/H27Title";
import LoginModalClose from "@/utils/svg/LoginModalClose";

type LoginModalTopProps = {
  onClick: () => void;
};

const LoginModalTop = ({ onClick }: LoginModalTopProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <H27Title title="비밀번호 재설정" />
      </div>
      <div className="cursor-pointer" onClick={onClick}>
        <LoginModalClose />
      </div>
    </div>
  );
};

export default LoginModalTop;
