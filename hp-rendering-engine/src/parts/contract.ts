import z from 'zod'
import { BoxContract } from './Box'
import { ImageContract } from './Image'

export namespace PartContract {
  const schemaMap = {
    box: BoxContract.configSchema,
    image: ImageContract.configSchema,
  } as const

  export const partTypeSchema = z.enum(['box', 'image'])
  export type PartType = z.infer<typeof partTypeSchema>

  export const partConfigSchema = z.union([schemaMap.box, schemaMap.image])
  export type PartConfig = z.infer<typeof partConfigSchema>

  const boxPartSchema = z.object({
    type: z.literal('box'),
    blockId: z.string(),
    id: z.string(),
    config: BoxContract.configSchema,
  })

  const imagePartSchema = z.object({
    type: z.literal('image'),
    blockId: z.string(),
    id: z.string(),
    config: ImageContract.configSchema,
  })

  export const partSchema = z.discriminatedUnion('type', [boxPartSchema, imagePartSchema])
  export type Part = z.infer<typeof partSchema>

  export const partsSchema = z.array(partSchema)
  export type Parts = z.infer<typeof partsSchema>
}
