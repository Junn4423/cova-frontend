import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Đăng nhập | Sign in",
  description: "Đăng nhập vào tài khoản Covasol của bạn. Sign in to your Covasol account.",
}

export default function Login() {
  return <LoginTemplate />
}
