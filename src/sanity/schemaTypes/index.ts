import { type SchemaTypeDefinition } from 'sanity'
import { projects } from './projects'
import { resume } from './resume'
import { visitors } from './visitors'
import { works } from './works'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, works, resume, visitors],
}
