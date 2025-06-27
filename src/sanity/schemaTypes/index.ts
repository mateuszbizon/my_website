import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, blockContentType],
}
