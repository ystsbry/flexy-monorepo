import { JSX, ParentProps } from 'solid-js'

// render
export type PartConfig = Record<string, unknown>

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
