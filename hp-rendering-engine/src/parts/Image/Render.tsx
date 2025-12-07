import { assignInlineVars } from '@vanilla-extract/dynamic'
import { boxConfigFactory, BoxRender } from '@parts/Box'
import { Contract } from './contract'
import { PartWithoutChildren, StyleConfigApplier } from '@parts/shared/partDefinition'
import { cssVars, styleRule } from './style.css'

export const Render: PartWithoutChildren<Contract.Config> = props => {
  const boxConfig = boxConfigFactory({
    link: props.attribute.link,
    layout: props.style.layout,
  })

  const imageAttr = props.attribute

  return (
    <BoxRender {...boxConfig}>
      <img
        src={imageAttr.src}
        alt={imageAttr.alt}
        loading={imageAttr.loading}
        decoding={imageAttr.decoding}
        fetchpriority={imageAttr.fetchpriority}
        class={styleRule}
        style={applyStyleConfig(props.style)}
      />
    </BoxRender>
  )
}

export const applyStyleConfig: StyleConfigApplier<Contract.Style> = _ => {
  return assignInlineVars({
    // style

    // fixed Style
    [cssVars.visual.width]: '100%',
    [cssVars.visual.height]: '100%',
    [cssVars.visual.objectFit]: 'cover',
    [cssVars.visual.display]: 'block',
  })
}
