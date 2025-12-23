import { Metadata } from "next"
import NotFoundContent from "@modules/common/components/not-found-content"

export const metadata: Metadata = {
  title: "404 - Không tìm thấy trang | Covasol",
  description: "Trang bạn đang tìm kiếm không tồn tại. Hãy quay lại trang chủ Covasol để tiếp tục mua sắm.",
}

export default function NotFound() {
  return <NotFoundContent />
}
