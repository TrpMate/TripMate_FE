'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { login } from '../_api'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().email({ message: '유효한 이메일을 입력해 주세요.' }),
  password: z.string().min(8, { message: '비밀번호는 최소 8자 이상 입력해 주세요.' }),
})

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await login(data)
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || '로그인 실패')
      }
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
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
              <FormLabel htmlFor="password">비밀번호</FormLabel>
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
          로그인
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              회원가입하기
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}
