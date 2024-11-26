import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-6 p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">로그인</h1>
      <form className="space-y-4 p-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
            name="password"
            required
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>

        <button type="submit" className="w-full rounded-md bg-blue-500 py-2 text-white">
          로그인
        </button>
      </form>

      <div className="text-center">
        <p className="text-sm">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            회원가입하기
          </Link>
        </p>
      </div>
    </div>
  )
}
