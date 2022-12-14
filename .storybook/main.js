module.exports = {
  stories: ['../ui/**/*.stories.mdx', '../ui/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@chakra-ui/storybook-addon'],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: 'webpack5',
  },
  features: {
    emotionAlias: false,
  },
};
