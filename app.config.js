export default ({ config }) => {
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
        image: './assets/splash.jpg',
        resizeMode: 'cover',
        backgroundColor: '#ffffff',
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        supportsTablet: true,
        "bundleIdentifier": "com.anonymous.rn-pr-1"
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
