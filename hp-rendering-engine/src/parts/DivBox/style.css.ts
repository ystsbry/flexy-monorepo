import { style, createVar } from "@vanilla-extract/css"
import { mediaQuery } from "@parts/shared/responsive";

export namespace CssVars {
  export const widthBaseVar = createVar()
  export const heightBaseVar = createVar()
  export const topBaseVar = createVar()
  export const leftBaseVar = createVar()
  export const rightBaseVar = createVar()
  export const bottomBaseVar = createVar()

  export const widthSmVar = createVar()
  export const heightSmVar = createVar()
  export const topSmVar = createVar()
  export const leftSmVar = createVar()
  export const rightSmVar = createVar()
  export const bottomSmVar = createVar()

  export const widthMdVar = createVar()
  export const heightMdVar = createVar()
  export const topMdVar = createVar()
  export const leftMdVar = createVar()
  export const rightMdVar = createVar()
  export const bottomMdVar = createVar()

  export const widthLgVar = createVar()
  export const heightLgVar = createVar()
  export const topLgVar = createVar()
  export const leftLgVar = createVar()
  export const rightLgVar = createVar()
  export const bottomLgVar = createVar()

  export const opacityVar = createVar()
  export const backgroundColorVar = createVar()
}

export namespace Style {
  export const divBox = style({
    // Style
    opacity: CssVars.opacityVar,
    backgroundColor: CssVars.backgroundColorVar,

    // Layout
    width: CssVars.widthBaseVar,
    height: CssVars.heightBaseVar,

    position: "absolute",
    top: CssVars.topBaseVar,
    left: CssVars.leftBaseVar,
    right: CssVars.rightBaseVar,
    bottom: CssVars.bottomBaseVar,

    "@media": {
      [mediaQuery.sm]: {
        width: CssVars.widthSmVar,
        height: CssVars.heightSmVar,

        top: CssVars.topSmVar,
        left: CssVars.leftSmVar,
        right: CssVars.rightSmVar,
        bottom: CssVars.bottomSmVar,
      },
      [mediaQuery.md]: {
        width: CssVars.widthMdVar,
        height: CssVars.heightMdVar,

        top: CssVars.topMdVar,
        left: CssVars.leftMdVar,
        right: CssVars.rightMdVar,
        bottom: CssVars.bottomMdVar,
      },
      [mediaQuery.lg]: {
        width: CssVars.widthLgVar,
        height: CssVars.heightLgVar,

        top: CssVars.topLgVar,
        left: CssVars.leftLgVar,
        right: CssVars.rightLgVar,
        bottom: CssVars.bottomLgVar,
      },
    },
  })
}
