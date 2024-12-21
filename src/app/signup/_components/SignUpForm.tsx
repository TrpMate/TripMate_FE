'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormFieldGroup from './FormFieldGroup'
import ErrorMessages from './ErrorMessages'
import useSignUp from '../_hooks/useSignUp'

export default function SignUpForm() {
  const { form, onSubmit } = useSignUp()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormFieldGroup
          name="email"
          label="이메일"
          placeholder="example@email.com"
          field={form.register('email')}
        />
        <FormFieldGroup name="username" label="이름" field={form.register('username')} />
        <FormFieldGroup name="nickname" label="프로필 이름" field={form.register('nickname')} />
        <FormFieldGroup
          name="password"
          label="비밀번호"
          type="password"
          field={form.register('password')}
        />
        <FormFieldGroup
          name="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          field={form.register('passwordConfirm')}
        />

        <ErrorMessages errors={form.formState.errors} />

        <Button type="submit" className="w-full">
          가입하기
        </Button>
      </form>
    </Form>
  )
}
