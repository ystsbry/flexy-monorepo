import z from 'zod'
import { BoxContract, BoxRender } from '@parts/Box'
import { PartContract } from '@parts'
import { Switch, Match, For } from 'solid-js'
import { ImageContract, ImageRender } from '@parts/Image'

export const blockConfigSchema = BoxContract.configSchema
export type BlockConfig = z.infer<typeof blockConfigSchema>

export const blockSchema = z.object({
  id: z.uuid(),
  config: blockConfigSchema,
  part: PartContract.partsSchema,
})
export type Block = z.infer<typeof blockSchema>

type BlockRenderProps = {
  block: Block
}

export const BlockRender = (props: BlockRenderProps) => (
  <BoxRender {...props.block.config}>
    <For each={props.block.part}>{part => <PickOnePartRender part={part} />}</For>
  </BoxRender>
)

type PickOnePartRenderProps = {
  part: PartContract.Part
}

const PickOnePartRender = (props: PickOnePartRenderProps) => (
  <Switch>
    <Match when={props.part.type === 'box'}>
      <BoxRender {...(props.part.config as BoxContract.Config)} />
    </Match>
    <Match when={props.part.type === 'image'}>
      <ImageRender {...(props.part.config as ImageContract.Config)} />
    </Match>
  </Switch>
)
