import Link from "next/link";

type NotUserContentProps = {
  setModalOpen: (value: boolean) => void;
};

const NotUserContent = ({ setModalOpen }: NotUserContentProps) => {
  return (
    <div className="w-full mt-[30px] flex h-[20px] items-center justify-between pb-[200px]">
      <div className="flex items-center gap-[5px]">
        <p className="font-medium">계정이 없으신가요?</p>
        <Link href={"/join"}>
          <p className="font-medium text-[#AED400]">회원가입하기</p>
        </Link>
      </div>
      <div className="flex items-center gap-[5px]">
        <p className="font-medium  cursor-pointer">아이디 찾기</p>
        <p className="text-[#CCCCCC]">|</p>
        <p
          className="font-medium  cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          비밀번호 찾기
        </p>
      </div>
    </div>
  );
};

export default NotUserContent;
