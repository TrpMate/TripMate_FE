import { JoinData } from "../page";
import JoinInput from "./JoinInput";

type JoinInputFormProps = {
  isEmailValid: (email: string) => boolean;
  isPasswordValid: (password: string) => boolean;
  isPasswordCheckValid: (password: string, passwordCheck: string) => boolean;
  joinData: JoinData;
  setJoinData: (data: JoinData) => void;
  handleNicknameCheck: (nickname: string) => void;
};

const JoinInputForm = ({
  isEmailValid,
  isPasswordValid,
  isPasswordCheckValid,
  joinData,
  setJoinData,
  handleNicknameCheck,
}: JoinInputFormProps) => {
  return (
    <>
      <JoinInput
        valid={isEmailValid(joinData.email)}
        type="text"
        value={joinData.email}
        title="아이디(이메일)"
        placeholder="예) example@email.com"
        onChange={(e) => setJoinData({ ...joinData, email: e.target.value })}
      />
      <JoinInput
        type="text"
        value={joinData.name}
        title="이름"
        onChange={(e) => setJoinData({ ...joinData, name: e.target.value })}
      />
      <JoinInput
        type="text"
        value={joinData.nickname}
        title="닉네임"
        onClick={() => handleNicknameCheck(joinData.nickname)}
        onChange={(e) => setJoinData({ ...joinData, nickname: e.target.value })}
      />
      <JoinInput
        valid={isPasswordValid(joinData.password)}
        type="password"
        value={joinData.password}
        title="비밀번호(8~16자 영문 대 소문자, 숫자)"
        onChange={(e) => setJoinData({ ...joinData, password: e.target.value })}
      />
      <JoinInput
        valid={isPasswordCheckValid(joinData.password, joinData.passwordCheck)}
        type="password"
        value={joinData.passwordCheck}
        title="비밀번호 확인"
        onChange={(e) =>
          setJoinData({ ...joinData, passwordCheck: e.target.value })
        }
      />
    </>
  );
};

export default JoinInputForm;
