module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-dark-mode",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
  ],
};
