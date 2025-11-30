import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { DivBox } from "./Render";
import type { Contract } from "./contract";

const meta: Meta<typeof DivBox> = {
  title: "layout/DivBox",
  component: DivBox,
};

export default meta;

type Story = StoryObj<typeof DivBox>;

const baseLayout: Contract.Config["layout"] = {
  base: {
    width: 240,
    height: 120,
    position: { top: 40, left: 40 },
  },
  sm: {
    width: 240,
    height: 120,
    position: { top: 40, left: 40 },
  },
  md: {
    width: 260,
    height: 140,
    position: { top: 60, left: 60 },
  },
  lg: {
    width: 280,
    height: 160,
    position: { top: 80, left: 80 },
  },
};

export const Default: Story = {
  args: {
    style: {
      opacity: 1,
      backgroundColor: "#fee2e2",
    },
    layout: baseLayout,
    children: <p>DivBox content</p>,
  } satisfies Contract.Config & { children: any },
};

export const SemiTransparent: Story = {
  args: {
    style: {
      opacity: 0.6,
      backgroundColor: "#bfdbfe",
    },
    layout: baseLayout,
    children: <p>"Semi transparent DivBox"</p>,
  } satisfies Contract.Config & { children: any },
};

export const ShiftedPosition: Story = {
  args: {
    style: {
      opacity: 1,
      backgroundColor: "#dcfce7",
    },
    layout: {
      ...baseLayout,
      base: {
        ...baseLayout.base,
        position: { top: 120, left: 160, right: 0, bottom: 0 },
      },
    },
    children: <p>"Shifted DivBox"</p>,
  } satisfies Contract.Config & { children: any },
};
