import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"], // Can tweak as needed but these are the extensions it comes with by default
  addons: [
    "@storybook/addon-onboarding", // Can get rid of when no longer needed
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook", // Visual regression testing
    "@storybook/addon-interactions", 
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
