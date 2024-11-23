'use server'

import { client } from '@/sanity/lib/client'
import { type Projects, type Resume, type Works } from '@/sanity/sanity.types'
import { unstable_cache as cache, revalidateTag } from 'next/cache'

export async function getProjects() {
  try {
    return await cache(
      async () => {
        const query = `
          *[_type == 'projects'] | order(isFavorite asc, _createdAt asc) {
            "id": _id,
            name,
            year,
            descriptions[] {
              language,
              description
            },
            url,
            isFavorite,
          }`

        const projects = await client.fetch<Projects[]>(query)
        return projects
      },
      ['projects'], // Cache key
      { revalidate: false, tags: ['projects'] }, // Cache options
    )()
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    throw new Error('Unable to fetch projects at this time. Please try again later.')
  }
}

export async function getWorks() {
  try {
    return await cache(
      async () => {
        const query = `
          *[_type == 'works'] | order(year desc) {
            "id": _id,
            company,
            position,
            year,
            workPeriod
          }`

        const projects = await client.fetch<Works[]>(query)
        return projects
      },
      ['works'], // Cache key
      { revalidate: false, tags: ['works'] }, // Cache options
    )()
  } catch (error) {
    console.error('Failed to fetch works:', error)
    throw new Error('Unable to fetch works at this time. Please try again later.')
  }
}

export async function getResumeByName(name: string): Promise<Resume | null> {
  try {
    return await cache(
      async () => {
        const query = `*[_type == "resume" && title match $name][0]{
          title,
          language,
          file {asset->{url}}
        }`

        const params = {
          name: `*${name}*`, // Using wildcard to match any title containing the name
        }

        const resume = await client.fetch<Resume | null>(query, params)
        return resume
      },
      ['resume', name], // Cache key, including name for uniqueness
      { revalidate: false, tags: ['resume'] }, // Cache options
    )()
  } catch (error) {
    console.error('Failed to fetch resume:', error)
    throw new Error('Unable to fetch resume at this time. Please try again later.')
  }
}

export type VisitorData = {
  count: number
}

const VISITOR_DOC_ID = 'ba6a2127-17a0-4e62-a50f-dd088095a7d2' // ID fixo para o documento

export async function getVisitorsCount() {
  return await cache(
    async () => {
      const query = '*[_type == "visitors" && _id == $id][0]'
      const visitors = await client.fetch<VisitorData>(query, { id: VISITOR_DOC_ID })
      return visitors
    },
    ['visitors'],
    { revalidate: 60 * 60, tags: ['visitors'] },
  )()
}

export async function incrementVisitorsCount() {
  await client.patch(VISITOR_DOC_ID).setIfMissing({ count: 0 }).inc({ count: 1 }).commit()
}

export async function revalidateProjects() {
  revalidateTag('projects')
}

export async function revalidateWorks() {
  revalidateTag('works')
}

export async function revalidateResumes() {
  revalidateTag('resume')
}
