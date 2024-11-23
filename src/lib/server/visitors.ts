import { type VisitorData } from '@/app/api/visitor/route'

const apiUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/visitor` // Production URL
  : 'http://localhost:3000/api/visitor' // Local Development URL

export const getVisitors = async (cookie?: string) => {
  const res = await fetch(apiUrl, {
    next: { revalidate: 1 },
    headers: cookie ? { Cookie: cookie } : undefined,
  })

  const data = (await res.json()) as VisitorData
  return data
}
