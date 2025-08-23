import type { Metadata } from 'next/types'

import { getMarkdownContent, MarkdownContent } from '@/components/markdown-content'

export const metadata: Metadata = {
  title: 'Privacy Policy | Folo',
  description: 'Privacy Policy for Folo - Next-Gen Information Browser',
}

export default async function PrivacyPolicyPage() {
  const { content } = await getMarkdownContent('legal/privacy.md')

  return (
    <MarkdownContent
      content={content}
    />
  )
}
