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
            description,
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
}

export async function revalidateItems() {
  revalidateTag('projects')
  revalidateTag('works')
}
