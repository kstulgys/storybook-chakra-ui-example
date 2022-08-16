module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@chakra-ui/storybook-addon'],
  features: {
    emotionAlias: false,
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: 'window',
      },
    };
  },
};
