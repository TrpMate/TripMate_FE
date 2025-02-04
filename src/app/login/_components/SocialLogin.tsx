import Link from "next/link";

type SocialLoginProps = {
  loginType: "kakao" | "google" | "naver";
  link: string;
  title: string;
};

const SocialLogin = ({ loginType, link, title }: SocialLoginProps) => {
  const socialList = {
    kakao: "text-white  bg-[#FEE500]",
    google: "text-black bg-white border ",
    naver: "",
  };

  return (
    <Link
      href={link}
      className={`w-full h-[65px] mt-[15px] flex items-center justify-center rounded-[60px] ${socialList[loginType]} `}
    >
      <div className="flex items-center h-[27px]">
        <p className="text-[22px] font-medium">{title}</p>
      </div>
    </Link>
  );
};

export default SocialLogin;
