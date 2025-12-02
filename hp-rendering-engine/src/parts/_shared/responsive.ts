import { z } from 'zod'

export const breakpoints = ['base', 'sm', 'md', 'lg'] as const
export type Breakpoint = (typeof breakpoints)[number]

export const ResponsiveNumberSchema = z.union([
  z.number(),
  z.object({
    base: z.number().optional(),
    sm: z.number().optional(),
    md: z.number().optional(),
    lg: z.number().optional(),
  }),
])
export type ResponsiveNumber = z.infer<typeof ResponsiveNumberSchema>

export const mediaQuery = {
  sm: 'screen and (min-width: 640px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 1024px)',
}

export const responsiveZodSchema = <T extends z.ZodType>(schema: T) =>
  z.object({
    base: schema,
    sm: schema.optional(),
    md: schema.optional(),
    lg: schema.optional(),
  })
