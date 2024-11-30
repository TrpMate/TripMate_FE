'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

const formSchema = z
  .object({
    email: z.string().email({ message: '유효한 이메일을 입력해 주세요.' }),
    password: z.string().min(8, { message: '비밀번호는 최소 8자 이상 입력해 주세요.' }),
    passwordConfirm: z.string().min(8, { message: '비밀번호를 다시 입력해 주세요.' }),
    name: z.string().min(2, { message: '이름은 최소 2자 이상 입력해 주세요.' }),
    contact: z.string().regex(/^010-\d{4}-\d{4}$/, { message: '연락처 입력 형식: 010-1234-5678' }),
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
      name: '',
      contact: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('데이터: ', data)
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
                <FormMessage />
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
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="010-1234-5678" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            가입하기
          </Button>
        </form>
      </Form>
    </div>
  )
}
