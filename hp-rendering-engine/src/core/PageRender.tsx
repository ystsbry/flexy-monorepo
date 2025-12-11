import z from 'zod'
import { BlockRender, blockSchema } from './BlockRender'
import { For } from 'solid-js'
import { BoxContract, BoxRender } from '@parts/Box'

export const blocksSchema = z.array(blockSchema)
export type Blocks = z.infer<typeof blocksSchema>

export const pageConfigSchema = BoxContract.configSchema
export type PageConfig = z.infer<typeof pageConfigSchema>

export const pageSchema = z.object({
  id: z.uuid(),
  config: pageConfigSchema,
  blocks: blocksSchema,
})
export type Page = z.infer<typeof pageSchema>

type Props = {
  page: Page
}

export const PageRender = (props: Props) => (
  <BoxRender {...props.page.config}>
    <For each={props.page.blocks}>{block => <BlockRender block={block} />}</For>
  </BoxRender>
)
