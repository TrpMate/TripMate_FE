import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 인증이 필요하지 않은 라우트
const publicRoutes = ['/login']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  const { pathname } = request.nextUrl

  // 공개 라우트인 경우 통과
  if (publicRoutes.includes(pathname)) {
    // 이미 로그인된 경우 대시보드로 리다이렉트
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }

  // 보호된 라우트에 접근하는데 토큰이 없는 경우
  if (!token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}