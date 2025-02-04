type BannerAuthProps = {
  pathName: string;
};

const BannerAuth = ({ pathName }: BannerAuthProps) => {
  return (
    <div className="pt-[57px] flex justify-center">
      <div className="flex items-center h-[75px]">
        <p className="leading-none text-[60px] font-bold text-white">
          {pathName === "/login" ? "로그인" : "회원가입"}
        </p>
      </div>
    </div>
  );
};

export default BannerAuth;
