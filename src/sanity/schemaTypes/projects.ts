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
      title: 'Project Description',
      name: 'description',
      type: 'string',
      description: 'A detailed description of the project and its purpose.',
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
