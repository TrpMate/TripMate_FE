type SaveButtonProps = {
  onClick: () => void;
};

const SaveButton = ({ onClick }: SaveButtonProps) => {
  return (
    <div
      className="px-[39px] py-[16.5px] mt-[45px] border border-[#CCCCCC] rounded-[30px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center h-[25px]">
        <p className="text-[20px] font-medium">저장하기</p>
      </div>
    </div>
  );
};

export default SaveButton;
