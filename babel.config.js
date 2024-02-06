module.exports = function (api) {
  const moduleResolverPlugin = [
    'module-resolver',
    {
      extensions: [
        '.ios.js',
        '.android.js',
        '.ios.jsx',
        '.android.jsx',
        '.js',
        '.jsx',
        '.json',
        '.ts',
        '.tsx',
      ],
      alias: {
        '@components': './src/components',
        '@libs': './src/libs',
        '@layouts': './src/layouts',
        '@providers': './src/providers',
        '@config': './src/config',
        '@assets': './assets',
        '@icons': './assets/icons',
        '@images': './assets/images',
        '@utils': './src/utils',
      },
    },
  ]
  const remoweWarnsFromConsolePlugin = ['transform-remove-console', { exclude: ['error', 'log'] }]
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      moduleResolverPlugin,
      remoweWarnsFromConsolePlugin,
      'nativewind/babel',
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  }
}
