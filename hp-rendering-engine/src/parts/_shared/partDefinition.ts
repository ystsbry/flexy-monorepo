import { JSX, ParentProps } from 'solid-js'
import type { ZodType } from 'zod'

export type PartConfig = Record<string, unknown>

export interface BasePartComponent<C extends PartConfig, HasChildren extends boolean = true> {
  (props: HasChildren extends true ? ParentProps<C> : C): JSX.Element
}

export type PartWithChildren<C extends PartConfig> = BasePartComponent<C, true>
export type PartWithoutChildren<C extends PartConfig> = BasePartComponent<C, false>

export interface PartDefinition<C extends PartConfig, S extends ZodType<C>> {
  type: string
  schema: S
  Component: BasePartComponent<C>
}
