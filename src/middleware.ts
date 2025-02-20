import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// 인증이 필요하지 않은 라우트
const publicRoutes = [
  "/",
  "/login",
  "/join",
  "/place",
  "/place/*",
  "/images/*",
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  // 공개 라우트인 경우 통과
  if (
    publicRoutes.some((route) =>
      route.endsWith("*")
        ? pathname.startsWith(route.replace("*", ""))
        : pathname === route
    )
  ) {
    // 이미 로그인된 경우 대시보드로 리다이렉트
    if (token && pathname === "/login") {
      return NextResponse.redirect(new URL("/", request.url)); // 로그인 상태에서 로그인 페이지로 접근 시 홈으로 리디렉션
    }
    return NextResponse.next();
  }

  // 보호된 라우트에 접근하는데 토큰이 없는 경우
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_api|_next/static|_next/image|favicon.ico|images).*)"],
};
