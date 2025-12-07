import z from 'zod'
import { BoxContract } from '@parts/Box'
import { linkSchema } from '@parts/shared/linkContract'

export namespace Contract {
  //
  // style
  //
  export const visualSchema = z.object({})
  export type Visual = z.infer<typeof visualSchema>

  export const styleSchema = z.object({
    visual: visualSchema,
    layout: BoxContract.ResponsiveLayoutSchema,
  })
  export type Style = z.infer<typeof styleSchema>

  //
  // css vars
  //
  export const visualCssSchema = visualSchema.extend({
    width: z.literal(100),
    height: z.literal(100),
    objectFit: z.literal('cover'),
    display: z.literal('block'),
  })
  export type VisualCss = z.infer<typeof visualCssSchema>

  export const cssSchema = z.object({
    visual: visualCssSchema,
    layout: BoxContract.ResponsiveLayoutSchema,
  })
  export type Css = z.infer<typeof cssSchema>

  //
  // attribute
  //
  export const imageLoadingSchema = z.enum(['lazy', 'eager'])
  export const imageDecodingSchema = z.enum(['async', 'sync', 'auto'])
  export const imageFetchPrioritySchema = z.enum(['high', 'low', 'auto'])

  export const attributeSchema = z.object({
    src: z.string(),
    alt: z.string().optional(),
    loading: imageLoadingSchema.optional(),
    decoding: imageDecodingSchema.optional(),
    fetchpriority: imageFetchPrioritySchema.optional(),
    link: linkSchema,
  })
  export type Attribute = z.infer<typeof attributeSchema>

  //
  // config
  //
  export const configSchema = z.object({
    attribute: attributeSchema,
    style: styleSchema,
  })
  export type Config = z.infer<typeof configSchema>
}
