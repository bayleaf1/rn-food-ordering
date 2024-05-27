process.env.EXPO_ROUTER_APP_ROOT = __dirname + "/src/app";
export default ({ config }) => {
  return {
    ...config,
    expo: {
      name: 'rn',
      slug: 'rn',
      version: '1.0.0',
      extra: {
        eas: {
          projectId: '0eba4bd8-ecef-4693-9a7f-d4cff6fc61f5',
        },
      },
      scheme: 'expo-top-app',
      orientation: 'portrait',
      icon: './assets/icon.png',
      userInterfaceStyle: 'light',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'cover',
        backgroundColor: '#ffffff',
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.dinuciobanu.rn',
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#ffffff',
        },
        package: 'com.dinuciobanu.rn',
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
