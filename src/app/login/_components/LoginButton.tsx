type LoginButtonProps = {
  onClick: () => void;
};

const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <div
      className="w-full h-[65px] mt-[25px] flex items-center justify-center rounded-[60px] bg-[#353535] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center h-[27px]">
        <p className="text-white text-[22px] font-medium">로그인</p>
      </div>
    </div>
  );
};

export default LoginButton;
