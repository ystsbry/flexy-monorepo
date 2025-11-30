// .storybook/main.ts
import type { StorybookConfig } from 'storybook-solidjs-vite';
import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';

const config: StorybookConfig = {
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
  ],
  async viteFinal(baseConfig) {
    const root = process.cwd();

    return mergeConfig(baseConfig, {
      plugins: [
        vanillaExtractPlugin(),
      ],
      resolve: {
        alias: [
          { find: "@config-schema", replacement: path.resolve(root, "src/config-schema") },
          { find: "@parts/shared", replacement: path.resolve(root, "src/parts/_shared") },
          { find: "@parts", replacement: path.resolve(root, "src/parts") },
          { find: "@src", replacement: path.resolve(root, "src") },
        ]
      },
    });
  },
};

export default config;
