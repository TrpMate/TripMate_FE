'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
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

export default function SignUpPage() {
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

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">회원가입</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="example@email.com" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {Object.values(form.formState.errors).map((error, i) => (
            <p key={i} className="text-xs text-red-600">
              *{error.message}
            </p>
          ))}

          <Button type="submit" className="w-full">
            가입하기
          </Button>
        </form>
      </Form>
    </div>
  )
}
