'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

type LoginFormValues = {
  email: string
  password: string
}

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || '로그인 실패')
      }

      alert('로그인 성공')
    } catch (error: any) {
      alert(error.message)
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
    <>
      <div className="mx-auto max-w-md space-y-6 p-4">
        <h1 className="mb-4 text-center text-2xl font-bold">로그인</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-4">
            <FormItem>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  {...form.register('email', { required: '이메일을 입력해주세요.' })}
                  className="mt-1 block w-full border p-2"
                />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  id="password"
                  {...form.register('password', { required: '비밀번호를 입력해 주세요.' })}
                  className="mt-1 block w-full rounded-md border p-2"
                />
              </FormControl>
            </FormItem>

            {errorMessage && (
              <Alert className="m-0 mb-4 border-none p-0 font-bold text-red-600">
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full rounded-md bg-blue-500 py-2 text-white">
              로그인
            </Button>
          </form>
        </Form>
      </div>

      <div className="text-center">
        <p className="text-sm">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            회원가입하기
          </Link>
        </p>
      </div>
    </>
  )
}
