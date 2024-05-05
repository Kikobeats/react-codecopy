const config = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  docs: {
    autodocs: 'tag'
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
}
export default config
