import { pageSchema } from '@src/core/PageRender'
import { z } from 'zod'

const pagesSchema = z.array(pageSchema)
export type Pages = z.infer<typeof pagesSchema>

export const dslDefinitionSchema = z.object({
  name: z.string().min(1),
  version: z.string().min(1),
  description: z.string().optional(),
  page: pagesSchema,
})
export type DSLDefinition = z.infer<typeof dslDefinitionSchema>
