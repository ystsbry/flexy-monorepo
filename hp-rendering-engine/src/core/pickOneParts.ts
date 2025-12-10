import { PartContract, partsRenderMap } from '@parts'
import { JSX } from 'solid-js'

type PartRenderer = {
  blockId: string
  partId: string
  render: () => JSX.Element
}

export const pickOneParts = (parts: PartContract.Part[]): PartRenderer[] =>
  parts.map(part => {
    switch (part.type) {
      case 'box': {
        const renderFn = partsRenderMap.box
        return {
          blockId: part.blockId,
          partId: part.id,
          render: () => renderFn(part.config),
        }
      }
      case 'image': {
        const renderFn = partsRenderMap.image
        return {
          blockId: part.blockId,
          partId: part.id,
          render: () => renderFn(part.config),
        }
      }
    }
  })
