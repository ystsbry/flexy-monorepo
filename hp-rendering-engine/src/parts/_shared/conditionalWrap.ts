import { JSX } from 'solid-js/jsx-runtime'

export const wrapIf =
  (cond: boolean, wrapper: (children: JSX.Element) => JSX.Element) => (children: JSX.Element) =>
    cond ? wrapper(children) : children
