import { JSX, ParentProps } from 'solid-js'
import type { ZodType } from 'zod'

export interface BasePartComponent<C, HasChildren extends boolean = true> {
  (props: HasChildren extends true ? ParentProps<C> : C): JSX.Element
}

export type PartWithChildren<C> = BasePartComponent<C, true>
export type PartWithoutChildren<C> = BasePartComponent<C, false>

export interface PartDefinition<C, S extends ZodType<C>> {
  type: string
  schema: S
  Component: BasePartComponent<C>
}
