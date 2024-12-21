import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signup } from '@/app/signup/_api'

const formSchema = z
  .object({
    email: z.string().email({ message: '유효한 이메일을 입력해 주세요.' }),
    password: z.string().min(8, { message: '비밀번호는 최소 8자 이상 입력해 주세요.' }),
    passwordConfirm: z.string().min(8, { message: '비밀번호를 다시 입력해 주세요.' }),
    username: z.string().min(2, { message: '이름은 최소 2자 이상 입력해 주세요.' }),
    nickname: z.string().min(2, { message: '닉네임은 최소 2자 이상 입력해 주세요.' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  })

export default function useSignUp() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
      nickname: '',
    },
  })
  const router = useRouter()

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await signup(data)
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || '회원가입 실패')
      }

      alert('회원가입이 완료되었습니다.')
      router.push('/login')
    } catch (error: any) {
      alert(error.message)
    }
  }

  return { form, onSubmit }
}
