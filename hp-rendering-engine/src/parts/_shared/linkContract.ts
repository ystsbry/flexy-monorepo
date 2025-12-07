import { z } from 'zod'
import { Refinement, rulesRegister } from '@src/configure/contract'

const linkRules: Refinement<Link>[] = [
  {
    rule: (arg: Link) => !(arg.isEnabled && typeof arg.url === 'string'),
    issue: {
      code: 'custom',
      message: 'Link is enabled but link URL is not provided',
    },
  },
]

export const linkSchema = z
  .object({
    isEnabled: z.boolean(),
    url: z.url().optional(),
  })
  .superRefine(rulesRegister(linkRules))

export type Link = z.infer<typeof linkSchema>
