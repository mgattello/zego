// .storybook/main.ts
import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/nextjs',
  staticDirs: ['../public'],
};

export default config;
