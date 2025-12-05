export type Styles = {
  [cssVarName: string]: string
}

export type StyleConfigApplier<C> = (config: C) => Styles

export const px = (v?: number) => (typeof v === 'number' ? `${v}px` : undefined)
