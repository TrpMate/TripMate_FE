import H27Title from '@/components/subTitle/H27Title'
import LoginModalClose from '@/components/ui/svg/LoginModalClose'

type LoginModalTopProps = {
  onClick: () => void
}

const LoginModalTop = ({ onClick }: LoginModalTopProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <H27Title title="비밀번호 재설정" />
      </div>
      <div className="cursor-pointer" onClick={onClick}>
        <LoginModalClose />
      </div>
    </div>
  )
}

export default LoginModalTop
