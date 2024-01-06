export default ({ config }) => {
  // (console.log(config);
  let IS_DEV = false
  let splashImage = IS_DEV ? './assets/dev-splash.png' : './assets/splash.jpg'
  return {
    ...config,
    expo: {
      name: 'rn-pr-1',
      slug: 'rn-pr-1',
      version: '1.0.0',
      scheme: 'expo-top-app',
      orientation: 'portrait',
      icon: './assets/icon.png',
      userInterfaceStyle: 'light',
      splash: {
        image: splashImage,
        resizeMode: 'cover',
        backgroundColor: '#ffffff',
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        supportsTablet: true,
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#ffffff',
        },
        package: 'com.dinu_ciobanu.rnpr1',
      },
      web: {
        favicon: './assets/favicon.png',
      },
      plugins: [
        [
          'expo-screen-orientation',
          {
            initialOrientation: 'DEFAULT',
          },
        ],
        'expo-router',
        'expo-localization',
      ],
    },
  }
}
