import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function proxy(request) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL(
        "/api/auth/login?post_login_redirect_url=/dashboard/",
        request.url
      )
    );
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
