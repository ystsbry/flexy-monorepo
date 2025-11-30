import { z } from "zod"
import { responsiveZodSchema } from "@parts/shared/responsive"

export namespace Contract {
  export const StyleSchema = z.object({
    opacity: z.float32().optional(),
    backgroundColor: z.union([
      z.string().regex(/^#/),       // hex
      z.string().regex(/^rgb/),     // rgb/rgba
      z.string().regex(/^hsl/),     // hsl
    ]).optional(),
  })
  export type Style = z.infer<typeof StyleSchema>

  const PositionSchema = z.object({
    top: z.number(),
    left: z.number(),
    bottom: z.number().optional(),
    right: z.number().optional(),
  })
  export type Position = z.infer<typeof PositionSchema>
  
  export const LayoutSchema = responsiveZodSchema(
    z.object({
      width: z.number().optional(),
      height: z.number().optional(),
      position: PositionSchema,
    })
  )
  export type Layout = z.infer<typeof LayoutSchema>

  export const ConfigSchema = z.object({
    style: StyleSchema,
    layout: LayoutSchema,
  })
  export type Config = z.infer<typeof ConfigSchema>
}
