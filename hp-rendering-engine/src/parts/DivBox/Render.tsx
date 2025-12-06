import { Style } from './style.css'
import { Contract } from './contract'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { cssVars } from './style.css'
import type { StyleConfigApplier } from '@parts/shared/styleConfigApplier'
import { PartWithChildren } from '@parts/shared/partDefinition'
import { splitProps } from 'solid-js'

export const DivBox: PartWithChildren<Contract.Config> = props => {
  const [local, config] = splitProps(props, ['children'])

  return (
    <div class={Style.divBox} style={applyStyleConfig(config)}>
      {local.children}
    </div>
  )
}

export const applyStyleConfig: StyleConfigApplier<Contract.Config> = config => {
  const base = config.layout.base
  const sm = config.layout.sm
  const md = config.layout.md
  const lg = config.layout.lg

  return assignInlineVars({
    // Style
    [cssVars.style.opacity]: String(config.style.opacity ?? 1),
    [cssVars.style.backgroundColor]: config.style.backgroundColor || 'transparent',

    // Layout
    // base
    [cssVars.layout.base.size.width]: px(base.size.width),
    [cssVars.layout.base.size.height]: px(base.size.height),

    [cssVars.layout.base.position.top]: px(base.position.top),
    [cssVars.layout.base.position.left]: px(base.position.left),
    [cssVars.layout.base.position.right]: px(base.position.right),
    [cssVars.layout.base.position.bottom]: px(base.position.bottom),

    // sm
    [cssVars.layout.sm.size.width]: px(sm?.size.width),
    [cssVars.layout.sm.size.height]: px(sm?.size.height),

    [cssVars.layout.sm.position.top]: px(sm?.position.top),
    [cssVars.layout.sm.position.left]: px(sm?.position.left),
    [cssVars.layout.sm.position.right]: px(sm?.position.right),
    [cssVars.layout.sm.position.bottom]: px(sm?.position.bottom),

    // md
    [cssVars.layout.md.size.width]: px(md?.size.width),
    [cssVars.layout.md.size.height]: px(md?.size.height),

    [cssVars.layout.md.position.top]: px(md?.position.top),
    [cssVars.layout.md.position.left]: px(md?.position.left),
    [cssVars.layout.md.position.right]: px(md?.position.right),
    [cssVars.layout.md.position.bottom]: px(md?.position.bottom),

    // lg
    [cssVars.layout.lg.size.width]: px(lg?.size.width),
    [cssVars.layout.lg.size.height]: px(lg?.size.height),

    [cssVars.layout.lg.position.top]: px(lg?.position.top),
    [cssVars.layout.lg.position.left]: px(lg?.position.left),
    [cssVars.layout.lg.position.right]: px(lg?.position.right),
    [cssVars.layout.lg.position.bottom]: px(lg?.position.bottom),
  })
}

const px = (v?: number) => (typeof v === 'number' ? `${v}px` : undefined)
