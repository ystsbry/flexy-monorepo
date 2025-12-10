import { z } from 'zod'
import { responsiveZodSchema } from '@parts/shared/responsive'
import { Refinement, rulesRegister } from '@src/configure/contract'
import { linkSchema } from '@parts/_shared/linkContract'

export namespace Contract {
  export const VisualSchema = z.object({
    opacity: z.number().min(0).max(1).optional(),
    backgroundColor: z
      .union([
        z.string().regex(/^#/), // hex
        z.string().regex(/^rgb/), // rgb/rgba
        z.string().regex(/^hsl/), // hsl
      ])
      .optional(),
  })
  export type Visual = z.infer<typeof VisualSchema>

  const PositionSchema = z.object({
    top: z.number().nonnegative(),
    left: z.number().nonnegative(),
    bottom: z.number().nonnegative().optional(),
    right: z.number().nonnegative().optional(),
  })
  export type Position = z.infer<typeof PositionSchema>

  const SizeSchema = z.object({
    width: z.number().nonnegative().optional(),
    height: z.number().nonnegative().optional(),
  })
  export type Size = z.infer<typeof SizeSchema>

  const layoutRules: Refinement<Layout>[] = [
    {
      rule: (arg: Layout) =>
        !(
          typeof arg.position.left === 'number' &&
          typeof arg.position.right === 'number' &&
          typeof arg.size.width === 'number'
        ),
      issue: {
        code: 'custom',
        message: 'Invalid layout configuration',
        path: [],
      },
    },
    {
      rule: (arg: Layout) =>
        !(
          typeof arg.position.top === 'number' &&
          typeof arg.position.bottom === 'number' &&
          typeof arg.size.height === 'number'
        ),
      issue: {
        code: 'custom',
        message: 'Invalid layout configuration',
        path: [],
      },
    },
  ]

  const LayoutSchema = z
    .object({
      size: SizeSchema,
      position: PositionSchema,
    })
    .superRefine(rulesRegister(layoutRules))
  export type Layout = z.infer<typeof LayoutSchema>

  export const ResponsiveLayoutSchema = responsiveZodSchema(LayoutSchema)
  export type ResponsiveLayout = z.infer<typeof ResponsiveLayoutSchema>

  export const StyleSchema = z.object({
    visual: VisualSchema,
    layout: ResponsiveLayoutSchema,
  })
  export type Style = z.infer<typeof StyleSchema>

  export const attributeSchema = z.object({
    type: z.enum(['div', 'main', 'section', 'article', 'header', 'footer']),
    link: linkSchema,
  })
  export type Attribute = z.infer<typeof attributeSchema>

  export const configSchema = z.object({
    attribute: attributeSchema,
    style: StyleSchema,
  })
  export type Config = z.infer<typeof configSchema>
}
