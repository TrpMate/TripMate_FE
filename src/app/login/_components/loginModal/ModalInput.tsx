type ModalInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ModalInput = ({ value, onChange }: ModalInputProps) => {
  return (
    <input
      value={value}
      className="w-full h-[60px] mt-[15px] rounded-[10px] pl-5 text-[22px] leading-none outline-none border border-[#CCCCCC]"
      placeholder="예) example@email.com"
      onChange={onChange}
    />
  );
};

export default ModalInput;
