"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  useEffect(() => {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }, []);
  return (
    <div>
      <LoginLink>
        <Button>Sign in</Button>
      </LoginLink>
      <RegisterLink>i can't tell the defferece</RegisterLink>
    </div>
  );
}
