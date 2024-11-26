'use client'
import { useState } from 'react'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.')
      
    }
  }

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold">회원가입</h1>
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            이메일
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label htmlFor="passwordConfirm" className="block text-sm font-medium">
            비밀번호 확인
          </label>
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            이름
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium">
            연락처
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            placeholder="010-1234-5678"
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          가입하기
        </button>
      </form>
    </div>
  )
}
