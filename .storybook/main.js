const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');
const codesandbox = require('remark-codesandbox');
const codesandboxTemplatePackageJSON = require('../src/template/codesandbox/package.json');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));

    const mdxRule = config.module.rules.find((rule) => rule.test == null ? false : rule.test.test('.story.mdx'));

    const {
      options: { remarkPlugins },
    } = mdxRule.use.find(({ loader }) => loader === require.resolve('@mdx-js/loader'));

    config.devtool = false;

    remarkPlugins.push([
      codesandbox,
      {
        mode: 'iframe',
        query: {
          fontsize: 14,
        },
        customTemplates: {
          lubycon: {
            extends: `file:${resolve(__dirname, '../src/template/codesandbox')}`,
            entry: 'src/App.tsx',
          },
          'lubycon-map': {
            extends: 'lubycon',
            files: {
              'package.json': {
                content: {
                  ...codesandboxTemplatePackageJSON,
                  dependencies: {
                    ...codesandboxTemplatePackageJSON.dependencies,
                  },
                },
              },
            },
          },
        },
        autoDeploy: process.env.NODE_ENV === 'production',
      },
    ]);

    return config;
  },
};
