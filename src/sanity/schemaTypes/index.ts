import { type SchemaTypeDefinition } from 'sanity'
import { projects } from './projects'
import { resume } from './resume'
import { works } from './works'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, works, resume],
}
