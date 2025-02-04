import H27Title from "@/components/subTitle/H27Title";

type ModalButtonProps = {
  onClick: () => void;
};

const ModalButton = ({ onClick }: ModalButtonProps) => {
  return (
    <div
      className="mt-[40px] flex items-center justify-center bg-[#353535] text-white rounded-[60px] h-[65px]"
      onClick={onClick}
    >
      <H27Title title="비밀번호 재설정 이메일 받기" />
    </div>
  );
};

export default ModalButton;
