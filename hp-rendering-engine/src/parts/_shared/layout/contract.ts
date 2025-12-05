import { z } from 'zod'
import { responsiveZodSchema } from '@parts/shared/responsive'
import { Refinement, rulesRegister } from '@src/configure/contract'

export namespace Contract {
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
}
