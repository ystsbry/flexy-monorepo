import type { PartDefinition } from '@parts/shared/partDefinition'
import { Contract } from './contract'
import { Box } from './Render'

export const BoxPart: PartDefinition<Contract.Config, typeof Contract.ConfigSchema> = {
  type: 'box',
  schema: Contract.ConfigSchema,
  Component: Box,
}
