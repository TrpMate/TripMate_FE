import H22Title from "@/components/subTitle/H22Title";
import JoinMessage from "./JoinMessage";

type JoinInputProps = {
  valid?: boolean;
  type: "text" | "password";
  value: string;
  title: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const JoinInput = ({
  valid,
  type,
  value,
  title,
  placeholder,
  onChange,
}: JoinInputProps) => {
  return (
    <div
      className={`flex flex-col gap-[15px] ${
        title === "아이디(이메일)" ? "" : "mt-[25px]"
      }`}
    >
      <H22Title title={title} />
      <div className="relative flex items-center">
        <input
          type={type}
          value={value}
          className="w-full border outline-none rounded-[10px] border-[#CCCCCC] h-[60px] pl-5 text-[18px] leading-none"
          placeholder={placeholder}
          onChange={onChange}
        />
        {title === "아이디(이메일)" && value !== "" && (
          <JoinMessage title={valid ? "사용가능" : "사용 불가능"} />
        )}
        {title === "비밀번호(8~16자 영문 대 소문자, 숫자)" && value !== "" && (
          <JoinMessage title={valid ? "사용가능" : "사용 불가능"} />
        )}
        {title === "비밀번호 확인" && value !== "" && (
          <JoinMessage title={valid ? "" : "비밀번호 불일치"} />
        )}
      </div>
    </div>
  );
};

export default JoinInput;
