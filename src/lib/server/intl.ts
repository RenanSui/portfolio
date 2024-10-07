import { getTranslations } from 'next-intl/server'

export const getMessage = async (locale: string) => {
  const intl = await getTranslations({ locale, namespace: 'HomePage' })

  return {
    career: intl('career') ?? '',
    resumeButton: intl('resumeButton') ?? '',
    about: {
      title: intl('sections.about.title') ?? '',
      description: intl('sections.about.description') ?? '',
    },
    works: {
      title: intl('sections.works.title') ?? '',
      description: intl('sections.works.description') ?? '',
    },
    projects: {
      title: intl('sections.projects.title') ?? '',
      description: intl('sections.projects.description') ?? '',
    },
    languages: {
      title: intl('sections.languages.title') ?? '',
      description: intl('sections.languages.description') ?? '',
    },
  }
}
