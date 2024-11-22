import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type FetchOptions = {
  cache?: RequestCache
  tags?: string[]
  revalidate?: number | false
  authRequired?: boolean
}

export class FetchError extends Error {
  constructor(
    override message: string,
    public status: number,
    public data?: any
  ) {
    super(message)
    this.name = 'FetchError'
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit & FetchOptions = {}
): Promise<T> {
  const { cache, tags, revalidate, authRequired = true, ...init } = options
  const url = new URL(endpoint, BASE_URL)

  // 쿠키에서 토큰 가져오기
  const cookieStore = cookies()
  const token = (await cookieStore).get('token')?.value

  // 인증이 필요한데 토큰이 없는 경우
  if (authRequired && !token) {
    redirect('/login')
  }

  try {
    const res = await fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...init.headers,
      },
      cache: cache ?? 'force-cache',
      ...(tags && { next: { tags } }),
      ...(typeof revalidate !== 'undefined' && {
        next: { revalidate },
      }),
    })

    // 401 에러 처리
    if (res.status === 401) {
      // 토큰 만료 시 쿠키 삭제
      const cookieStore = await cookies()
      cookieStore.delete('token')
      cookieStore.delete('refreshToken')
      redirect('/login')
    }

    if (!res.ok) {
      const error = await res.json()
      throw new FetchError(error.message ?? 'API Error', res.status, error)
    }

    return res.json()
  } catch (error) {
    if (error instanceof FetchError) {
      throw error
    }
    throw new FetchError('Network error', 500)
  }
}
