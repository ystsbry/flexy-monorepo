import type { PartDefinition } from "@parts/shared/partDefinition";
import { Contract } from "./contract";
import { DivBox } from "./Render";

export const DivBoxPart: PartDefinition<Contract.Config, typeof Contract.ConfigSchema> = {
  type: "div-box",
  schema: Contract.ConfigSchema,
  Component: DivBox,
};
