import { type Projects, type Works } from '@/sanity/sanity.types'
import { type getMessage } from './server/intl'

const projects = [
  {
    name: 'Lorem',
    year: 2024,
    descriptions: [
      {
        language: 'en',
        description: 'ipsum dolor sit lorem',
      },
      {
        language: 'pt-br',
        description: 'Ipsum dolor sit lorem, amet consectetur',
      },
    ],
    url: '/',
    isFavorite: true,
  },
  {
    name: 'Lorem',
    year: 2023,
    descriptions: [
      {
        language: 'en',
        description: 'ipsum dolor sit lorem',
      },
      {
        language: 'pt-br',
        description: 'Ipsum dolor sit lorem, amet consectetur',
      },
    ],
    url: '/',
    isFavorite: false,
  },
] satisfies Partial<Projects>[]

const works = [
  {
    company: 'Lorem',
    position: 'Lorem, ipsum dolor',
    year: 2021,
    workPeriod: 'Oct 2021 - Aug 2023',
  },
  {
    company: 'Ipsum',
    position: 'Lorem, ipsum dolor',
    year: 2019,
    workPeriod: 'Jun 2019 - Sep 2021',
  },
] satisfies Partial<Works>[]

const message = {
  career: 'Lorem ipsum',
  resumeButton: 'Lorem ipsum dolor',
  about: {
    title: 'Lorem',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos enim a maiores. Assumenda cumque ratione, natus ullam tempora cupiditate dignissimos. Magni, provident id. Alias.',
  },
  works: {
    title: 'Lorem',
    description: '',
  },
  projects: {
    title: 'Lorem',
    description: '',
  },
  languages: {
    title: 'Lorem',
    description: '',
  },
} satisfies Awaited<ReturnType<typeof getMessage>>

export const mocks = { projects, works, message }
