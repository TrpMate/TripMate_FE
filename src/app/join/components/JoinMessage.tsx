import { JoinMessageProps } from "../types/joinType";

const JoinMessage = ({ title, input }: JoinMessageProps) => {
  if (!title) return null;
  const titleList = {
    사용가능: "text-[#AED400] right-[20px]",
    "사용 불가능": `text-[#D47C00] ${
      input === "닉네임" ? "right-[20px]" : "-right-[90px]"
    } `,
    "비밀번호 불일치": "text-[#D47C00] right-[20px]",
  };

  return (
    <div className={`absolute ${titleList[title]} flex items-center h-[20px]`}>
      <p className="font-medium leading-none">{title}</p>
    </div>
  );
};

export default JoinMessage;
