// schemas/resume.js
import { defineType } from 'sanity'

export const resume = defineType({
  title: 'Resume',
  name: 'resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'language',
      type: 'string',
      title: 'Language',
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
      name: 'file',
      type: 'file',
      title: 'Resume File',
      options: {
        accept: '.pdf', // Specify that only PDF files are allowed
      },
      validation: (Rule) => Rule.required(),
    },
    // Add other fields as needed
  ],
})
