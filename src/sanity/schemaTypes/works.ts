import { defineField, defineType } from 'sanity'

export const works = defineType({
  name: 'works',
  type: 'document',
  title: 'Work Experience',
  fields: [
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
      description: 'The name of the company you worked for.',
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
      description: 'Your role or position at the company.',
    }),
    defineField({
      name: 'workPeriod',
      type: 'string',
      title: 'Work Period',
      description: 'The duration or dates you worked at the company.',
    }),
    defineField({
      title: 'Start Year',
      name: 'year',
      type: 'number',
      description: 'The year you started working at the company.',
    }),
  ],
})
