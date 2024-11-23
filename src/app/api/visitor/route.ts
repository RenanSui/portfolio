import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export type VisitorData = {
  count: number
}

const filePath = path.join(process.cwd(), 'data', 'visitorCount.json')

export async function GET(req: Request) {
  const cookies = req.headers.get('cookie')
  console.log({ cookies })
  const visited = cookies?.includes('visited=true')
  console.log({ visited })
  let data: VisitorData

  try {
    const fileData = fs.readFileSync(filePath, 'utf8')
    data = JSON.parse(fileData) as VisitorData
  } catch (error) {
    data = { count: 0 }
  }

  if (!visited) {
    data.count += 1

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

    const response = NextResponse.json({ count: data.count })
    response.cookies.set('visited', 'true', {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
      sameSite: 'lax',
    })

    return response
  }

  return NextResponse.json({ count: data.count })
}
