import type { Metadata } from "next/types"

import { getMarkdownContent, MarkdownContent } from "@/components/markdown-content"

export const metadata: Metadata = {
  title: "Terms of Service | Folo",
  description: "Terms of Service for Folo - Next-Gen Information Browser",
}

export default async function TermsOfServicePage() {
  const { content } = await getMarkdownContent("legal/tos.md")

  return <MarkdownContent content={content} />
}
