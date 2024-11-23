import { defineType } from 'sanity'

export const visitors = defineType({
  name: 'visitors',
  type: 'document',
  title: 'Visitor Count',
  fields: [
    {
      name: 'count',
      type: 'number',
      title: 'Visitor Count',
      description: 'Número de visitantes registrados.',
      initialValue: 1,
      validation: (Rule) => Rule.min(0),
    },
  ],
})
