import { z, core } from 'zod'

export type BaseConfig = Record<string, unknown>

export type Refinement<C extends BaseConfig> = {
  rule: (arg: C) => boolean | Promise<boolean>
  issue: core.$ZodSuperRefineIssue
}

type RuleRegister = <C extends BaseConfig>(
  refinementRules: Refinement<C>[],
) => (arg: C, ctx: z.RefinementCtx) => void | Promise<void>

export const rulesRegister: RuleRegister =
  <C extends BaseConfig>(refinementRules: Refinement<C>[]) =>
  async (arg: C, ctx: z.RefinementCtx) => {
    for (const refinement of refinementRules) {
      const isValid = await refinement.rule(arg)

      isValid || ctx.addIssue(refinement.issue)
    }
  }

export const greaterThan = <T extends BaseConfig>(
  left: keyof T,
  right: keyof T,
  message?: string,
): Refinement<T> => ({
  rule: v => {
    const l = v[left]
    const r = v[right]
    return typeof l === 'number' && typeof r === 'number' && l > r
  },
  issue: {
    code: 'custom',
    message: message ?? `${String(left)} must be > ${String(right)}`,
    path: [String(left)],
  },
})
