import { defineField, defineType } from 'sanity'

export const projects = defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      title: 'Project Name',
      name: 'name',
      type: 'string',
      description: 'The name of the project.',
    }),
    defineField({
      title: 'Project Year',
      name: 'year',
      type: 'number',
      description: 'The year the project was completed or launched.',
    }),
    defineField({
      title: 'Project Descriptions',
      name: 'descriptions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Language',
              name: 'language',
              type: 'string',
              options: {
                list: [
                  { title: 'English', value: 'en' },
                  { title: 'Portuguese (Brazil)', value: 'pt-br' },
                  // Add more languages as needed
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
              description: 'A detailed description of the project in the selected language.',
            },
          ],
        },
      ],
      description: 'Project descriptions in multiple languages.',
    }),
    defineField({
      title: 'Project Link/Demo',
      name: 'url',
      type: 'string',
      description: 'A link to the live project or a demo.',
    }),
    defineField({
      title: 'Favorite Project',
      name: 'isFavorite',
      type: 'boolean',
      description: 'Mark this project as a favorite.',
      initialValue: false,
    }),
  ],
})
