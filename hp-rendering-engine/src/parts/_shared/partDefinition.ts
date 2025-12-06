import { z } from 'zod'
import { createVar } from '@vanilla-extract/css'
import { JSX, ParentProps } from 'solid-js'

// render
export interface BasePartComponent<C extends PartConfig, HasChildren extends boolean = true> {
  (props: HasChildren extends true ? ParentProps<C> : C): JSX.Element
}

export type PartWithChildren<C extends PartConfig> = BasePartComponent<C, true>
export type PartWithoutChildren<C extends PartConfig> = BasePartComponent<C, false>

// style
export type Styles = {
  [cssVarName: string]: string
}

export type StyleConfigApplier<C> = (config: C) => Styles

export type CssVarsFrom<T extends Record<string, unknown>> = {
  [K in keyof T]-?: NonNullable<T[K]> extends Record<string, unknown>
    ? CssVarsFrom<NonNullable<T[K]>>
    : ReturnType<typeof createVar>
}

// part definition
export type PartConfig = Record<string, unknown>

export interface PartDefinition<C extends PartConfig, S extends z.ZodType> {
  type: 'box' | 'text' | 'image' | 'svg' | 'title' | 'button'
  schema: S
  Component: PartWithChildren<C> | PartWithoutChildren<C>
}
