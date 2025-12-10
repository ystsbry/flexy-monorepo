import { BoxRender, BoxContract } from './Box'
import { ImageRender, ImageContract } from './Image'

export { PartContract } from './contract'

export const partsRenderMap = {
  box: (config: BoxContract.Config) => BoxRender(config),
  image: (config: ImageContract.Config) => ImageRender(config),
}
