'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { login, LoginPayload  } from '../_api'

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginPayload) => {
    try {
      await login(data)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : '로그인에 실패했습니다.')
    }
  }

  const onError = (errors: any) => {
    if (errors.email) {
      setErrorMessage(errors.email.message)
    } else if (errors.password) {
      setErrorMessage(errors.password.message)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-6">
        <FormItem>
          <FormLabel htmlFor="email">이메일</FormLabel>
          <FormControl>
            <Input
              id="email"
              type="email"
              {...form.register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '올바른 이메일 주소를 입력해주세요.',
                },
              })}
              className="mt-1"
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="password">비밀번호</FormLabel>
          <FormControl>
            <Input
              id="password"
              type="password"
              {...form.register('password', { required: '비밀번호를 입력해주세요.' })}
              className="mt-1"
            />
          </FormControl>
        </FormItem>

        {errorMessage && (
          <Alert variant="destructive">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

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
